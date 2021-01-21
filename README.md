# AWS Serverless Web App

This is an example project based from [Building a Serverless Web App with AWS Services](https://www.pluralsight.com/guides/front-end-javascript/building-a-serverless-web-app-on-aws-services) meant to be an exemplar project to showcase:
- A serverless fullstack web app using:
  - AWS Gateway + AWS Lambda
  - AWS DynamoDB
  - S3 static site hosting
- Serverless Application Model Framework / CloudFormation
- [3 Musketeers](https://3musketeers.io/)

## Setup
```bash
$ make .env
```

## Deploy API
```bash
$ make apiDeploy
```

## Build React Frontend
```bash
$ make frontendBuild
```

## Deploy React Frontend to S3
```bash
$ make frontendDeploy
```
