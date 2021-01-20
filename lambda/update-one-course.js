const AWS = require('aws-sdk');
const DB = new AWS.DynamoDB({ 
    region: process.env.AWS_REGION, 
    apiVersion: '2012-08-10' 
});
const dynamoDbFlattenHelper = require('./helper/dynamodb-flatten-helper');

exports.handler = async (event, context) => {
    const updateParams = buildDbUpdateParams(event);
    
    try {
        await DB.putItem(updateParams).promise();
        return dynamoDbFlattenHelper.flattenDynamoDbItem(updateParams.Item);
    } catch (error) {
        console.log(error);
        return error;
    }
};

function buildDbUpdateParams({ id, watchHref, title, authorId, length, category }) {
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