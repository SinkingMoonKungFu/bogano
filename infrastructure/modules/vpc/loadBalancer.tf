module "sgLoadBalancer" {
  source = "terraform-aws-modules/security-group/aws"

  name   = "${local.app_name}-load-balancer-security-group"
  vpc_id = module.vpc.vpc_id

  egress_with_cidr_blocks = [
    {
      from_port   = 0
      to_port     = 0
      protocol    = -1
      description = "Allow all Outgoing"
      cidr_blocks = "0.0.0.0/0"
    },
  ]

  ingress_with_cidr_blocks = [
    {
      from_port   = var.port
      to_port     = var.port
      protocol    = "tcp"
      description = "Allow http incoming ipv4"
      cidr_blocks = "0.0.0.0/0"
    },
  ]

  ingress_with_ipv6_cidr_blocks = [
    {
      from_port        = var.port
      to_port          = var.port
      protocol         = "tcp"
      description      = "Allow http incoming ipv6"
      ipv6_cidr_blocks = "::/0"
    },
  ]
}
