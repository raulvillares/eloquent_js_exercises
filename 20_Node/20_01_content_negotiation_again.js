var http = require("http");

var makeRequest = function(type) {
    var request = http.request({
    hostname: "eloquentjavascript.net",
    path: "/author",
    method: "GET",
    headers: {Accept: type}
    }, function(response) {
    console.log("Server responded with status code", response.statusCode);
    response.on("data", function(chunk) {
        process.stdout.write(chunk.toString());
    });
    });
    request.end();
}

makeRequest("text/plain");
makeRequest("text/html");
makeRequest("application/json");
makeRequest("application/rainbows+unicorns");