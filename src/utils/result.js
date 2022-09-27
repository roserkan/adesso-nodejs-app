function successResult(data, message = null, statusCode = 200){
    return {
        data: data,
        message: message ? message : 'Success',
        statusCode: statusCode,
        success: true
    }
}

function errorResult(message = null, statusCode = 400){
    return {
        data: [],
        message: message ? message : 'Error',
        statusCode: statusCode,
        success: false
    }
}

module.exports = {successResult, errorResult};