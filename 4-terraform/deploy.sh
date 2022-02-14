#! /bin/bash
set -e

BUCKET_NAME=iac-workshop-terraform

terraform apply
aws s3 sync ../app "s3://$BUCKET_NAME"

echo "https://$BUCKET_NAME.s3.amazonaws.com/index.html"