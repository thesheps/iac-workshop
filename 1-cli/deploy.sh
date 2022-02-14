#! /bin/bash
set -e

BUCKET_NAME=iac-workshop-cli

aws s3api create-bucket --bucket $BUCKET_NAME --region us-east-1
aws s3api put-bucket-policy --bucket $BUCKET_NAME --policy file://bucket-policy.json
aws s3api put-bucket-website --bucket $BUCKET_NAME --website-configuration file://website.json
aws s3 sync ../app "s3://$BUCKET_NAME"

echo "https://$BUCKET_NAME.s3.amazonaws.com/index.html"