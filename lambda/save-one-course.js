const AWS = require('aws-sdk');
const DB = new AWS.DynamoDB({ 
    region: process.env.AWS_REGION, 
    apiVersion: '2012-08-10' 
});
const dynamoDbFlattenHelper = require('./helper/dynamodb-flatten-helper');

exports.handler = async (event, context) => {
    const id = buildIdFromEvent(event);
    const createParams = buildDbCreateParams(id, event);
    
    try {
        await DB.putItem(createParams).promise();
        return dynamoDbFlattenHelper.flattenDynamoDbItem(createParams.Item);
    } catch (error) {
        console.log(error);
        return error;
    }
};

function buildIdFromEvent({ title }) {
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