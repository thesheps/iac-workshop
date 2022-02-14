#! /bin/bash
set -e

BUCKET_NAME=iac-workshop-cli
aws s3api delete-object --bucket $BUCKET_NAME --key index.html
aws s3api delete-bucket --bucket $BUCKET_NAME
