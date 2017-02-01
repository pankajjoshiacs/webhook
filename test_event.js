'use strict';

module.exports = {
    "resource": "/{proxy+}",
    "path": "/224338240560911",
    "httpMethod": "POST",
    "headers": {
        "CloudFront-Forwarded-Proto": "https",
        "CloudFront-Is-Desktop-Viewer": "true",
        "CloudFront-Is-Mobile-Viewer": "false",
        "CloudFront-Is-SmartTV-Viewer": "false",
        "CloudFront-Is-Tablet-Viewer": "false",
        "CloudFront-Viewer-Country": "US",
        "Content-Type": "application/json",
        "Host": "ENTER_YOUR_API_ID.execute-api.ap-northeast-1.amazonaws.com",
        "Via": "1.1 9618583567a38a34167f23464ee60537.cloudfront.net (CloudFront)",
        "X-Amz-Cf-Id": "inEKysniYfEQ8_0zWR6O2dBSHr9EZadd8tCLgLOc4hRspxUew2aGFQ==",
        "X-Forwarded-For": "54.158.95.205, 54.240.144.78",
        "X-Forwarded-Port": "443",
        "X-Forwarded-Proto": "https",
        "X-Hook-Signature": "fa37b587c83a28199dbd7f74a7277c81d6c375347beac69b31559b1f7c44b00c"
    },
    "queryStringParameters": null,
    "pathParameters": {
        "proxy": "224338240560911"
    },
    "stageVariables": null,
    "requestContext": {
        "accountId": "290451810917",
        "resourceId": "2ajipa",
        "stage": "prod",
        "requestId": "847c54af-c9d0-11e6-9e8b-a7554d47a764",
        "identity": {
            "cognitoIdentityPoolId": null,
            "accountId": null,
            "cognitoIdentityId": null,
            "caller": null,
            "apiKey": null,
            "sourceIp": "54.158.95.205",
            "accessKey": null,
            "cognitoAuthenticationType": null,
            "cognitoAuthenticationProvider": null,
            "userArn": null,
            "userAgent": null,
            "user": null
        },
        "resourcePath": "/{proxy+}",
        "httpMethod": "POST",
        "apiId": "ENTER_YOUR_API_ID"
    },
    "body": "{\"events\":[{\"resource\":230689344536825,\"user\":219258707551319,\"type\":\"task\",\"action\":\"changed\",\"created_at\":\"2017-01-07T09:59:55.337Z\",\"parent\":null},{\"resource\":239974021312461,\"user\":219258707551319,\"type\":\"story\",\"action\":\"added\",\"created_at\":\"2017-01-07T09:59:55.342Z\",\"parent\":230689344536825},{\"resource\":239974021312461,\"user\":219258707551319,\"type\":\"story\",\"action\":\"added\",\"created_at\":\"2017-01-07T09:59:55.342Z\",\"parent\":230689344536825}]}",
    "isBase64Encoded": false
};
