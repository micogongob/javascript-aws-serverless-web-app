# JavaScript AWS Serverless Web App

This is a project based from [Building a Serverless Web App with AWS Services](https://www.pluralsight.com/guides/front-end-javascript/building-a-serverless-web-app-on-aws-services) meant to be an exemplar project to showcase:
- A serverless fullstack web app using:
  - AWS Gateway + AWS Lambda running on NodeJS
  - AWS DynamoDB NoSQL database
  - ReactJS frontend with S3 static site hosting
- Serverless Application Model Framework / CloudFormation
- [3 Musketeers](https://3musketeers.io/)

### setup
```bash
$ make .env
```

### deploy api
```bash
$ make apiDeploy
```

### build react frontend
```bash
$ make frontendBuild
```

### deploy react frontend to s3
```bash
$ make frontendDeploy
```
