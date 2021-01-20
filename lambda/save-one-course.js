const AWS = require('aws-sdk');
const DB = new AWS.DynamoDB({ 
    region: process.env.AWS_REGION, 
    apiVersion: '2012-08-10' 
});
const lambaProxy = require('./helper/lambda-proxy-helper');
const dynamoDbFlattenHelper = require('./helper/dynamodb-flatten-helper');

exports.handler = async (event, context) => {
    const requestBody = lambaProxy.getApiRequestBodyFromEvent(event);
    const id = buildIdFromRequest(requestBody);
    const createParams = buildDbCreateParams(id, requestBody);
    
    try {
        await DB.putItem(createParams).promise();
        return lambaProxy.createOkResponse(dynamoDbFlattenHelper.flattenDynamoDbItem(createParams.Item));
    } catch (error) {
        console.log(error);
        return lambaProxy.createErrorResponse(error.message);
    }
};

function buildIdFromRequest({ title }) {
    return replaceAll(title, ' ', '-').toLowerCase();
}

function buildDbCreateParams(id, { title, authorId, length, category }) {
    return {
      Item: {
        id: {
          S: id,
        },
        title: {
          S: title,
        },
        watchHref: {
          S: `http://www.pluralsight.com/courses/${id}`,
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

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}