const AWS = require('aws-sdk');
const DB = new AWS.DynamoDB({ 
    region: process.env.AWS_REGION, 
    apiVersion: '2012-08-10' 
});
const dynamoDbFlattenHelper = require('./helper/dynamodb-flatten-helper');

exports.handler = async (event, context) => {    
    try {
        const courses = await DB.scan({ TableName: process.env.COURSES_TABLE }).promise();
        return courses.Items.map(dynamoDbFlattenHelper.flattenDynamoDbItem);
    } catch (error) {
        console.log(error);
        return error;
    }
};
