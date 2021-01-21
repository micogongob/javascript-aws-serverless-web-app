#!/bin/bash

apiBaseUrl=$(aws cloudformation describe-stacks \
  --stack-name aws-serverless-web-app \
  --query "Stacks[0].Outputs[?OutputKey=='ApiBaseUrl'].OutputValue" \
  --output text)

cp ./frontend/src/api/serverUrl.template.js ./frontend/src/api/serverUrl.js


echo "Replacing api value in serverUrl.js with: $apiBaseUrl"

replacement=$apiBaseUrl
find='\$API_URL\$'
sed -i "s|$find|$replacement|g" ./frontend/src/api/serverUrl.js
