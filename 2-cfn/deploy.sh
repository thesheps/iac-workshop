#! /bin/bash
set -e

aws cloudformation create-stack --template-body file://website.yaml --stack-name IacWorkshopCfn

BUCKET_NAME=$(aws cloudformation describe-stacks \
    --stack-name IacWorkshopCfn \
    --query "Stacks[0].Outputs[?OutputKey=='BucketDomainName'].OutputValue" \
    --output text)

WEBSITE_URL=$(aws cloudformation describe-stacks \
    --stack-name IacWorkshopCfn \
    --query "Stacks[0].Outputs[?OutputKey=='WebsiteUrl'].OutputValue" \
    --output text)

aws s3 sync ../app "s3://$BUCKET_NAME"

echo "$WEBSITE_URL"