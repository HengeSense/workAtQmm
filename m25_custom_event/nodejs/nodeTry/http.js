var http = require('http'),
    url = require('url');
var server = http.createServer(function (req, res) {
    var get = url.parse(req.url, true).query;
    res.writeHead(200,{
        'Content-Type' : 'text/plain'
    });
    res.end("Hello " + get.name);
}).listen(1337, '127.0.0.1');
console.log("I am running...");

//var http = require('http');
//http.createServer(function (req, res) {
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    res.end('Hello World\n');
//}).listen(1337, '127.0.0.1');
//console.log('Server running at http://127.0.0.1:1337/');