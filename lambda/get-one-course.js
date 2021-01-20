const AWS = require('aws-sdk');
const DB = new AWS.DynamoDB({ 
    region: process.env.AWS_REGION, 
    apiVersion: '2012-08-10' 
});
const dynamoDbFlattenHelper = require('./helper/dynamodb-flatten-helper');

exports.handler = async (event, context) => {
    const getOneParams = buildDbGetOneParams(event);
    
    try {
        const course = await DB.getItem(getOneParams).promise();
        return dynamoDbFlattenHelper.flattenDynamoDbItem(course.Item);
    } catch (error) {
        console.log(error);
        return error;
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

