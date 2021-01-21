const AWS = require('aws-sdk');
const DB = new AWS.DynamoDB({ 
    region: process.env.AWS_REGION, 
    apiVersion: '2012-08-10' 
});
const lambdaProxy = require('./helper/lambda-proxy-helper');
const dynamoDbFlattenHelper = require('./helper/dynamodb-flatten-helper');

exports.handler = async (event, context) => {
    const requestPathParams = lambdaProxy.getApiRequestPathParametersFromEvent(event);
    const requestBody = lambdaProxy.getApiRequestBodyFromEvent(event);
    const updateParams = buildDbUpdateParams(requestPathParams.id, requestBody);
    
    try {
        await DB.putItem(updateParams).promise();
        return lambdaProxy.createOkResponse(dynamoDbFlattenHelper.flattenDynamoDbItem(updateParams.Item));
    } catch (error) {
        console.log(error);
        return lambdaProxy.createErrorResponse(error.message);
    }
};

function buildDbUpdateParams(id, { watchHref, title, authorId, length, category }) {
    return {
      Item: {
        id: {
          S: id,
        },
        title: {
          S: title,
        },
        watchHref: {
          S: watchHref,
        },
        authorId: {
          S: authorId,
        },
        length: {
          S: length,
        },
        category: {
          S: category,
        },
      },
      TableName: process.env.COURSES_TABLE,
    };
}