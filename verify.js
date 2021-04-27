var mockServerClient = require('mockserver-client').mockServerClient;
mockServerClient("localhost", 1080).mockAnyResponse({
    "httpRequest": {
        "method": "GET",
        "path": "/api/v2/user/verify",
    },
    "httpResponse": {
        "statusCode": 401,
        "body":
///////////////////////
{
    "result": {
        "status": 0,
        "error_id": "608749e36f590",
        "error_code": "MW_UNAUTHORIZED",
        "error_message": [
            "UNAUTHORIZED"
        ]
    }
}
///////////////////////
    
}
}).then(
    function () {
        console.log("User_Verify");
    },
    function (error) {
        console.log(error);
    }
);
