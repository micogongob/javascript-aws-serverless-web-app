const AWS = require('aws-sdk');
const DB = new AWS.DynamoDB({ 
    region: process.env.AWS_REGION, 
    apiVersion: '2012-08-10' 
});
const lambdaProxy = require('./helper/lambda-proxy-helper');
const dynamoDbFlattenHelper = require('./helper/dynamodb-flatten-helper');

exports.handler = async (event, context) => {
    const requestPathParams = lambdaProxy.getApiRequestPathParametersFromEvent(event);
    const getOneParams = buildDbGetOneParams(requestPathParams);
    
    try {
        const course = await DB.getItem(getOneParams).promise();
        return lambdaProxy.createOkResponse(dynamoDbFlattenHelper.flattenDynamoDbItem(course.Item));
    } catch (error) {
        console.log(error);
        return lambdaProxy.createErrorResponse(error.message);
    }
};

function buildDbGetOneParams({ id }) {
    return {
        Key: {
            id: { S: id }
        },
        TableName: process.env.COURSES_TABLE
    };
}

