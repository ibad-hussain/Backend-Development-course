// Working with http module


const http = require('http');


// Create a server
const server = http.createServer(function(req, res) {
    res.end("hello world");
})
server.listen(3000);
