#!/bin/bash

if [ -z $LAMBDA_ARTIFACTS_S3_BUCKET ]
then
  echo "LAMBDA_ARTIFACTS_S3_BUCKET env var missing"
  exit 1
fi

if [ -z $WEB_APP_STACK_NAME ]
then
  echo "WEB_APP_STACK_NAME env var missing"
  exit 1
fi

bucket=$LAMBDA_ARTIFACTS_S3_BUCKET
stackName=$WEB_APP_STACK_NAME

aws cloudformation package --s3-bucket $bucket --template-file template.yml --output-template-file output.yml

aws cloudformation deploy --stack-name $stackName --template-file output.yml --capabilities CAPABILITY_NAMED_IAM