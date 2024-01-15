terraform {
  required_providers {
    dreamhost = {
      source  = "adamantal/dreamhost"
      version = "0.3.2"
    }
  }
}

provider "dreamhost" {
  api_key = var.api_key
}

resource "dreamhost_dns_record" "bogano_dns" {
  record = format("%s.%s", var.environment, var.hostname)
  type   = "CNAME"
  value  = var.alb_host
}
