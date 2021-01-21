function getApiRequestBodyFromEvent(event) {
    return JSON.parse(event.body);
}

function getApiRequestPathParametersFromEvent(event) {
    return event.pathParameters;
}

function createOkResponse(message) {
    return createLambaProxyRespone(200, message);
}

function createErrorResponse(message) {
    return createLambaProxyRespone(500, message);
}

function createLambaProxyRespone(statusCode, body) {
    return {
        statusCode,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };
}

exports.getApiRequestBodyFromEvent = getApiRequestBodyFromEvent;
exports.getApiRequestPathParametersFromEvent = getApiRequestPathParametersFromEvent;
exports.createOkResponse = createOkResponse;
exports.createErrorResponse = createErrorResponse;