variable "region" {
  type    = string
  default = "us-east-2"
}

variable "port" {
  type = number
}

locals {
  app_name = "bogano"
}
