module "vpc" {
  source = "terraform-aws-modules/vpc/aws"

  name = "${local.app_name}-vpc"
  cidr = "10.0.0.0/16"

  azs             = ["${var.region}a", "${var.region}b", "${var.region}c"]
  public_subnets  = ["10.0.1.0/24", "10.0.2.0/24"]
  private_subnets = ["10.0.3.0/24", "10.0.4.0/24"]

  enable_dns_hostnames = true
  enable_dns_support   = true

  # Default security group - ingress/egress rules cleared to deny all
  manage_default_security_group  = false
  default_security_group_ingress = [{}]
  default_security_group_egress  = [{}]
}

output "vpc_id" {
  value = module.vpc.vpc_id
}

output "securityGroupId" {
  value = module.sgLoadBalancer.security_group_id
}

output "publicSubnets" {
  value = module.vpc.public_subnets
}