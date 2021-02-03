# JavaScript AWS Serverless Web App

This is based from [Pluralsight - Building a Serverless Web App on AWS Services](https://www.pluralsight.com/guides/building-a-serverless-web-app-on-aws-services) meant to be an exemplar project to showcase a serverless fullstack web app using:
- AWS Gateway + AWS Lambda running on NodeJS
- AWS DynamoDB NoSQL database
- [ReactJS frontend](https://github.com/eh3rrera/react-app-frontend) with S3 static site hosting

## Prerequisites
This project uses [Docker](https://docs.docker.com/engine/installation/), [Compose](https://docs.docker.com/compose/install/) and [Make](https://www.gnu.org/software/make/) to build artifacts and to execute deployment scripts.  

### Setup
    $ make .env deps

### Deploy API
    $ make deployApi

### Deploy Frontend to S3
    $ make deployFrontend
