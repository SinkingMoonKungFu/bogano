resource "aws_iam_role" "ECSAppTaskExecutionRole" {
  name               = "ECSAppTaskExecutionRole"
  assume_role_policy = data.aws_iam_policy_document.assume_role_policy.json
}

data "aws_iam_policy_document" "assume_role_policy" {
  statement {
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["ecs-tasks.amazonaws.com"]
    }
  }
}

resource "aws_iam_role_policy_attachment" "ecsTaskExecutionRole_policy" {
  role       = aws_iam_role.ECSAppTaskExecutionRole.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

resource "aws_iam_user" "ecr_push" {
  name = "${var.app_name}-ecr-push"
}

# resource "aws_iam_user_policy" "ecr_access" {
#   name = "boganoECRAccess"
#   user = aws_iam_user.ecr_push.name
#   policy = jsonencode({
#     "Version" : "2012-10-17",
#     "Statement" : [
#       {
#         "Effect" : "Allow",
#         "Action" : [
#           "ecr:GetDownloadUrlForLayer",
#           "ecr:BatchGetImage",
#           "ecr:BatchCheckLayerAvailability",
#           "ecr:PutImage",
#           "ecr:InitiateLayerUpload",
#           "ecr:UploadLayerPart",
#           "ecr:CompleteLayerUpload",
#           "ecr:DescribeRepositories",
#           "ecr:GetRepositoryPolicy",
#           "ecr:ListImages",
#           "ecr:DeleteRepository",
#           "ecr:BatchDeleteImage",
#           "ecr:SetRepositoryPolicy",
#           "ecr:DeleteRepositoryPolicy",
#         ],
#         "Resource" : [
#           "arn:aws:ecr:${var.region}:${var.account_id}:repository/${var.app_name}",
#           "arn:aws:ssm:${var.region}:${var.account_id}:parameter/*-${var.app_name}-image-tag"
#         ]
#       },
#       {
#         "Effect" : "Allow",
#         "Action" : [
#           "logs:DescribeLogGroups"
#         ],
#         "Resource" : [
#           "arn:aws:logs:${var.region}:${var.account_id}:log-group::log-stream:"
#         ]
#       },
#       {
#         "Effect" : "Allow",
#         "Action" : [
#           "ecr:DescribeRepositories"
#         ],
#         "Resource" : [
#           "arn:aws:ecr:${var.region}:${var.account_id}:repository/*"
#         ]
#       },
#     ],
#   })
# }

resource "aws_iam_user_policy" "ecr_push" {
  name = "${var.app_name}-ecr-push-policy"
  user = aws_iam_user.ecr_push.name
  policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Effect" : "Allow",
        "Action" : [
          "ecr:PutImageTagMutability",
          "ecr:InitiateLayerUpload",
          "ecr:BatchCheckLayerAvailability",
          "ecr:CompleteLayerUpload",
          "ecr:UploadLayerPart",
          "ecr:PutImage"
        ],
        "Resource" : [
          "arn:aws:ecr:us-east-2:${var.account_id}:repository/${var.app_name}",
          "arn:aws:ssm:us-east-2:${var.account_id}:parameter/*-${var.app_name}-image-tag"
        ]
      },
      {
        "Effect" : "Allow",
        "Action" : [
          "logs:DescribeLogGroups"
        ],
        "Resource" : [
          "arn:aws:logs:us-east-2:${var.account_id}:log-group::log-stream:"
        ]
      },
      {
        "Effect" : "Allow",
        "Action" : [
          "ecr:DescribeRepositories"
        ],
        "Resource" : [
          "arn:aws:ecr:us-east-2:${var.account_id}:repository/*"
        ]
      },
    ],
  })
}
