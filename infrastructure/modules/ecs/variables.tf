variable "environments" {
  type        = list(string)
  description = "The environments to create new services for"
  default     = ["production"]
}

variable "vpc_id" {
  type = string
}

variable "app_name" {
  type = string
}

variable "ecs_config" {
  type = object({
    environment                        = string
    cpu                                = number
    memory                             = number
    image                              = string
    deployment_maximum_percent         = number
    deployment_minimum_healthy_percent = number
    desired_count                      = number
    environment_variables              = map(string)
    subnet_ids                         = list(string)
    port                               = number
  })
}

variable "account_id" {
  type = string
}

variable "region" {
  type = string
}

output "task_definition_family" {
  value = aws_ecs_task_definition.bogano_task.family
}

output "service_security_group" {
  value = aws_security_group.ecs_tasks.id
}

output "container_port" {
  value = var.ecs_config.port
}

output "container_name" {
  value = format("%s-%s-container", var.ecs_config.environment, var.app_name)
}
