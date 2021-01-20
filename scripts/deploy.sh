#!/bin/bash

if [ -z $ARTIFACTS_S3_BUCKET ]
then
  echo "ARTIFACTS_S3_BUCKET env var missing"
  exit 1
fi

bucket=$ARTIFACTS_S3_BUCKET

aws cloudformation package --s3-bucket $bucket --template-file template.yml --output-template-file output.yml

aws cloudformation deploy --stack-name aws-serverless-web-app  --template-file output.yml --capabilities CAPABILITY_NAMED_IAM