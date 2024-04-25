const { createServer } = require("http");

createServer((req, res) => {
    res.writeHead(200,{"content-Type":"text/plain"});
    res.end("Hello World");
}).listen(3000);
console.log("web server is listening on port 3000");