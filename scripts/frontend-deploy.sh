#!/bin/bash

webAppBucket=$(aws cloudformation describe-stacks \
  --stack-name aws-serverless-web-app \
  --query "Stacks[0].Outputs[?OutputKey=='WebAppS3Bucket'].OutputValue" \
  --output text)

echo "Uploading files in frontend/build to bucket: $webAppBucket"
aws s3 cp --recursive ./frontend/build/ s3://$webAppBucket
