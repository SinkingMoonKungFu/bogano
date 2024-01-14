resource "aws_ecr_repository" "bogano_ecr_repo" {
  name = var.app_name
}

resource "aws_ecr_lifecycle_policy" "repositoryPolicy" {
  repository = aws_ecr_repository.bogano_ecr_repo.name

  policy = jsonencode(
    {
      "rules" : [
        {
          "rulePriority" : 1,
          "description" : "Delete older images",
          "selection" : {
            "tagStatus" : "any",
            "countType" : "imageCountMoreThan",
            "countNumber" : 4
          },
          "action" : {
            "type" : "expire"
          }
        }
      ]
    }
  )
}
