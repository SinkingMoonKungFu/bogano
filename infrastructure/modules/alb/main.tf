resource "aws_lb_target_group" "targetGroup" {
  count    = length(var.environments)
  name     = format("%s-%s-tg", var.environments[count.index], var.app_name)
  port     = var.port
  protocol = "HTTP"
  vpc_id   = var.vpcId

  load_balancing_algorithm_type = "round_robin"
  slow_start                    = 30 # 30 seconds
  target_type                   = "ip"

  health_check {
    enabled             = true
    healthy_threshold   = 2
    interval            = 30 # 30 seconds
    matcher             = 200
    path                = var.loadBalancerConfig.healthCheckPath
    port                = "traffic-port"
    timeout             = 15 # 15 seconds
    unhealthy_threshold = 3
  }
}

resource "aws_lb" "loadBalancer" {
  name               = "${var.app_name}-lb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = var.loadBalancerConfig.securityGroupIds
  subnets            = var.loadBalancerConfig.subnetIds

  enable_deletion_protection = false

  enable_http2 = true
}

resource "aws_lb_listener" "albTargetListener" {
  load_balancer_arn = aws_lb.loadBalancer.arn
  port              = var.port
  protocol          = "HTTP"

  default_action {
    type = "forward"
    // XXX_jwir3: This _should_ be the ARN of the _production_ environment. Because
    //            of how tf does this, though, we might run into a problem if we
    //            don't specify production _last_. See also:
    //            https://blog.gruntwork.io/terraform-tips-tricks-loops-if-statements-and-gotchas-f739bbae55f9
    target_group_arn = aws_lb_target_group.targetGroup[0].arn
  }
}

resource "aws_lb_listener_rule" "albListenerRule" {
  count = length(var.environments)

  listener_arn = aws_lb_listener.albTargetListener.arn
  priority     = 100 + count.index

  action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.targetGroup[count.index].arn
  }

  condition {
    host_header {
      values = [format("%s.%s.sinkingmoon.com", var.environments[count.index], var.app_name)]
    }
  }
}
