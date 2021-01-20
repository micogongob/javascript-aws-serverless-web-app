const AWS = require('aws-sdk');
const DB = new AWS.DynamoDB({ region: process.env.AWS_REGION, apiVersion: '2012-08-10' });

exports.handler = async (event, context) => {
    const params = { TableName: process.env.AUTHORS_TABLE };

    try {
        const data = await DB.scan(params).promise();

        const authors = data.Items.map(item => { 
            return { id: item.id.S, firstName: item.firstName.S, lastName: item.lastName.S };
        });

        return authors;
    } catch (error) {
        console.log(error);
        return error;
    }
};