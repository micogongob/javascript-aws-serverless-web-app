const AWS = require('aws-sdk');
const DB = new AWS.DynamoDB({ 
    region: process.env.AWS_REGION, 
    apiVersion: '2012-08-10' 
});
const lambdaProxy = require('./helper/lambda-proxy-helper');
const dynamoDbFlattenHelper = require('./helper/dynamodb-flatten-helper');

exports.handler = async (event, context) => {
    const params = { TableName: process.env.AUTHORS_TABLE };

    try {
        const authors = await DB.scan(params).promise();
        return lambdaProxy.createOkResponse(authors.Items.map(dynamoDbFlattenHelper.flattenDynamoDbItem));
    } catch (error) {
        console.log(error);
        return lambdaProxy.createErrorResponse(error.message);
    }
};