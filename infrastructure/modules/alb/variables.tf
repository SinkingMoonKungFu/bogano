variable "environments" {
  type = list(string)
}

variable "app_name" {
  type = string
}

variable "vpcId" {
  type = string
}

variable "port" {
  type = number
}

variable "loadBalancerConfig" {
  type = object({
    healthCheckPath  = string
    subnetIds        = list(string)
    securityGroupIds = list(string)
  })
}

output "targetGroupArns" {
  value = aws_lb_target_group.targetGroup[*].arn
}

output "dns_name" {
  value = aws_lb.loadBalancer.dns_name
}
