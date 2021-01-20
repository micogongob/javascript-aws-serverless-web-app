function getApiRequestBodyFromEvent(event) {
    return JSON.parse(event.body);
}

function createOkResponse(message) {
    return createLambaProxyRespone(200, message);
}

function createErrorResponse(message) {
    return createLambaProxyRespone(500, message);
}

function createLambaProxyRespone(statusCode, message) {
    return {
        statusCode,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: message
        })
    };
}

exports.getApiRequestBodyFromEvent = getApiRequestBodyFromEvent;
exports.createOkResponse = createOkResponse;
exports.createErrorResponse = createErrorResponse;