# AWS Serverless Web App

This is an example project based from [Building a Serverless Web App with AWS Services](https://www.pluralsight.com/guides/front-end-javascript/building-a-serverless-web-app-on-aws-services) meant to be an exemplar project to showcase:
- Serverless Application Model Framework
- S3 Static Site Hosting
- [3 Musketeers](https://3musketeers.io/)

## Deploy API
```bash
make apiDeploy
```

## Setup
```bash
make .env
```

## Build React Frontend
```bash
make frontendBuild
```

## Deploy React Frontend to S3
```bash
make frontendDeploy
```
