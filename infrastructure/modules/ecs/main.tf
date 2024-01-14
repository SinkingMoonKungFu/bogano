resource "aws_iam_role" "exec" {
  count = length(var.environments)
  assume_role_policy = jsonencode(
    {
      Statement = [
        {
          Action = "sts:AssumeRole"
          Effect = "Allow"
          Principal = {
            Service = "ecs-tasks.amazonaws.com"
          }
        },
      ]
      Version = "2008-10-17"
    }
  )
  name_prefix           = format("%s-%s-%s", var.environments[count.index], var.app_name, "ecs-exec")
  force_detach_policies = false
  managed_policy_arns = [
    "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
  ]
  max_session_duration = 3600
}

resource "aws_iam_role" "task" {
  count = length(var.environments)
  assume_role_policy = jsonencode(
    {
      Statement = [
        {
          Action = "sts:AssumeRole"
          Effect = "Allow"
          Principal = {
            Service = "ecs-tasks.amazonaws.com"
          }
        },
      ]
      Version = "2008-10-17"
    }
  )
  name_prefix           = format("%s-%s-%s", var.environments[count.index], "bogano", "ecs-task")
  force_detach_policies = false
  managed_policy_arns = [
    "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy",
  ]
  max_session_duration = 3600

  inline_policy {
    name = "ecs-bogano-policy"
    policy = jsonencode({
      "Version" : "2012-10-17",
      "Statement" : [
        {
          "Action" : [
            "ssm:GetParameter",
            "ssm:PutParameter",
            "ecr:PutImageTagMutability",
            "ecr:InitiateLayerUpload",
            "ecr:BatchCheckLayerAvailability",
            "ecr:CompleteLayerUpload",
            "ecr:UploadLayerPart",
            "ecr:PutImage",
            "secretsmanager:GetSecretValue",
          ],
          "Effect" : "Allow",
          "Resource" : [
            "arn:aws:ecr:${var.region}:${var.account_id}:repository/bogano",
            "arn:aws:ssm:${var.region}:${var.account_id}:parameter/*-bogano-image-tag"
          ]
        },
        {
          "Action" : [
            "ecr:GetAuthorizationToken"
          ],
          "Effect" : "Allow",
          "Resource" : "*"
        },
        {
          "Action" : [
            "logs:CreateLogGroup",
            "logs:TagResource",
            "logs:DescribeLogGroups",
            "logs:PutRetentionPolicy"
          ],
          "Effect" : "Allow",
          "Resource" : [
            "arn:aws:logs:${var.region}:${var.account_id}:log-group:/ecs/${var.environments[count.index]}-bogano:log-stream:",
            "arn:aws:logs:${var.region}:${var.account_id}:log-group::log-stream"
          ]
        },
        {
          "Action" : [
            "ecr:CreateRepository",
            "ecr:TagResource"
          ],
          "Effect" : "Allow",
          "Resource" : [
            "arn:aws:ecr:${var.region}:${var.account_id}:repository/bogano"
          ]
        },
        {
          "Action" : [
            "ecs:DescribeClusters"
          ],
          "Effect" : "Allow",
          "Resource" : [
            "arn:aws:ecs:${var.region}:${var.account_id}:cluster/bogano"
          ]
        }
      ]
    })
  }
}

resource "aws_cloudwatch_log_group" "ecs_log_group" {
  name              = format("/ecs/%s-%s", var.ecs_config.environment, var.app_name)
  retention_in_days = 30
}

resource "aws_security_group" "bogano_ingress_security_group" {
  description = format("Security group for %s bogano ingress traffic", var.ecs_config.environment)
  name        = format("%s-bogano-ingress-sg", var.ecs_config.environment)
  vpc_id      = var.vpc_id

  ingress = [
    {
      cidr_blocks      = ["0.0.0.0/0"]
      description      = ""
      from_port        = 443
      ipv6_cidr_blocks = []
      prefix_list_ids  = []
      protocol         = "tcp"
      security_groups  = []
      self             = false
      to_port          = 443
    },
    {
      cidr_blocks      = ["0.0.0.0/0"]
      description      = ""
      from_port        = var.ecs_config.port
      ipv6_cidr_blocks = []
      prefix_list_ids  = []
      protocol         = "tcp"
      security_groups  = []
      self             = false
      to_port          = var.ecs_config.port
    },
  ]

  #  // XXX_jwir3: Do we need to be able to respond on port 8080?
  egress = [
    {
      cidr_blocks      = ["0.0.0.0/0"]
      description      = ""
      from_port        = 8080
      ipv6_cidr_blocks = []
      prefix_list_ids  = []
      protocol         = "tcp"
      security_groups  = []
      self             = false
      to_port          = 8080
    }
  ]
}

resource "aws_security_group" "ecs_tasks" {
  name        = format("%s-bogano-service-ingress-sg", var.ecs_config.environment)
  description = format("Security group for %s bogano ECS Service Ingress Traffic", var.ecs_config.environment)
  vpc_id      = var.vpc_id
  ingress = [
    {
      cidr_blocks      = ["0.0.0.0/0"]
      description      = "Allow access from anywhere"
      from_port        = var.ecs_config.port
      ipv6_cidr_blocks = []
      prefix_list_ids  = []
      protocol         = "tcp"
      security_groups  = [aws_security_group.bogano_ingress_security_group.id]
      self             = false
      to_port          = var.ecs_config.port
    }
  ]

  egress = [
    {
      cidr_blocks      = ["0.0.0.0/0"]
      description      = ""
      from_port        = 0
      to_port          = 0
      ipv6_cidr_blocks = []
      prefix_list_ids  = []
      protocol         = "-1"
      security_groups  = []
      self             = false
    }
  ]
}

resource "aws_ecs_task_definition" "bogano_task" {
  family = format("%s-%s", var.ecs_config.environment, var.app_name)
  container_definitions = jsonencode([
    {
      name        = format("%s-%s-container", var.ecs_config.environment, var.app_name)
      image       = format("%s:%s", var.ecs_config.image, "${var.ecs_config.environment}-latest")
      environment = [for k, v in var.ecs_config.environment_variables : { name = k, value = v }]
      essential   = true
      cpu         = 0
      mountPoints = []
      volumesFrom = []

      portMappings = [
        {
          containerPort = var.ecs_config.port
          hostPort      = var.ecs_config.port
          protocol      = "tcp"
        }
      ]

      logConfiguration = {
        logDriver = "awslogs"
        options = {
          awslogs-group         = aws_cloudwatch_log_group.ecs_log_group.name
          awslogs-region        = var.region
          awslogs-stream-prefix = "ecs"
        }
      }
    }
  ])

  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  cpu                      = var.ecs_config.cpu
  memory                   = var.ecs_config.memory
  execution_role_arn       = "arn:aws:iam::${var.account_id}:role/ECSAppTaskExecutionRole"
  task_role_arn            = "arn:aws:iam::${var.account_id}:role/ECSAppTaskExecutionRole"
}
