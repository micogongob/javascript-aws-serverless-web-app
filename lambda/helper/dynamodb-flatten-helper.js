exports.flattenDynamoDbItems = ({ Item }) => {
    const flattenedFields = { ...Item };
    const flattendFieldValues = {};
 
    Object.keys(flattenedFields).forEach(f => {
        flattendFieldValues[f] = flattenedFields[f].S;
    });

    return flattendFieldValues;
}
