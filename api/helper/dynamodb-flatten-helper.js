exports.flattenDynamoDbItem = (Item) => {
    const flattendFieldValues = {};
 
    Object.keys(Item).forEach(f => {
        flattendFieldValues[f] = Item[f].S;
    });

    return flattendFieldValues;
}
