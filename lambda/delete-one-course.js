const AWS = require('aws-sdk');
const DB = new AWS.DynamoDB({ 
    region: process.env.AWS_REGION, 
    apiVersion: '2012-08-10' 
});

exports.handler = async (event, context) => {
    const getOneParams = buildDbGetOneParams(event);
    
    try {
        const response = await DB.deleteItem(getOneParams).promise();
        return response;
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

