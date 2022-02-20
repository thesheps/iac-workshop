#! /bin/bash
set -e

BUCKET_NAME=iac-workshop-terraform

aws s3api delete-object --bucket $BUCKET_NAME --key index.html
terraform destroy
