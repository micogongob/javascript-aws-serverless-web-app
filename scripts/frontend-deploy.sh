#!/bin/bash

if [ -z $WEB_APP_STACK_NAME ]
then
  echo "WEB_APP_STACK_NAME env var missing"
  exit 1
fi

stackName=$WEB_APP_STACK_NAME

webAppBucket=$(aws cloudformation describe-stacks \
  --stack-name $stackName \
  --query "Stacks[0].Outputs[?OutputKey=='WebAppS3Bucket'].OutputValue" \
  --output text)

echo "Uploading files in frontend/build to bucket: $webAppBucket"
aws s3 cp --recursive ./frontend/build/ s3://$webAppBucket
