var http = require("http");
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  request.on("data", function(chunk) {
    process.stdout.write("Received request: "+chunk.toString()+"\n"); 
    response.write(chunk.toString().toUpperCase());
  });
  request.on("end", function() {
    process.stdout.write("End of request.");
    response.end();
  });
}).listen(8000);