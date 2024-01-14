module "bogano_ecs" {
  source     = "../modules/ecs"
  app_name   = "bogano"
  count      = length(local.environments)
  vpc_id     = module.bogano_vpc.vpc_id
  account_id = local.account_id
  region     = local.region
  ecs_config = {
    environment                        = local.environments[count.index]
    cpu                                = 256
    memory                             = 512
    image                              = format("%s.dkr.ecr.${local.region}.amazonaws.com/bogano", local.account_id)
    deployment_maximum_percent         = 200
    deployment_minimum_healthy_percent = 100
    desired_count                      = 1
    port                               = local.bogano_port
    environment_variables = {
      ENVIRONMENT = local.environments[count.index]
    }

    subnet_ids = module.bogano_vpc.publicSubnets
  }
}

resource "aws_ecs_service" "bogano_service" {
  count                = length(local.environments)
  name                 = format("%s-%s-service", local.environments[count.index], local.app_name)
  cluster              = aws_ecs_cluster.bogano_cluster[count.index].arn
  desired_count        = "1"
  task_definition      = module.bogano_ecs[count.index].task_definition_family
  scheduling_strategy  = "REPLICA"
  launch_type          = "FARGATE"
  force_new_deployment = true

  network_configuration {
    # It would be really nice if we didn't have this, but without it, the VPC
    # appears to fail. We should figure out why this is happening at some
    # point.
    assign_public_ip = true
    subnets          = module.bogano_vpc.publicSubnets
    security_groups  = [module.bogano_ecs[count.index].service_security_group]
  }

  deployment_minimum_healthy_percent = 100
  deployment_maximum_percent         = 200

  load_balancer {
    target_group_arn = module.applicationLoadBalancer.targetGroupArns[count.index]
    container_name   = module.bogano_ecs[count.index].container_name
    container_port   = module.bogano_ecs[count.index].container_port
  }
}
