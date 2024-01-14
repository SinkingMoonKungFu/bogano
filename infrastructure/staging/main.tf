
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

module "bogano_iam" {
  source     = "../modules/iam"
  app_name   = local.app_name
  account_id = local.account_id
  region     = local.region
}

module "bogano_vpc" {
  source = "../modules/vpc"
  region = "us-east-2"
  port   = local.bogano_port
}

module "applicationLoadBalancer" {
  source       = "../modules/alb"
  app_name     = local.app_name
  environments = local.environments
  port         = local.bogano_port

  vpcId = module.bogano_vpc.vpc_id

  loadBalancerConfig = {
    healthCheckPath  = "/"
    securityGroupIds = [module.bogano_vpc.securityGroupId]
    subnetIds        = module.bogano_vpc.publicSubnets
  }
}

## This is only needed if the ECR repo needs to be created.
module "bogano_ecr_repo" {
  source = "../modules/ecr"

  app_name = local.app_name
}

resource "aws_ecs_cluster" "bogano_cluster" {
  count = length(local.environments)
  name  = format("%s-%s-cluster", local.environments[count.index], local.app_name)
}
