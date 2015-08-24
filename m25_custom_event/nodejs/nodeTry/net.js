//var net = require('net');
//
//var server = net.createServer(function (socket) {
//    socket.write('Echo server\r\n');
//    socket.pipe(socket);
//});
//
//server.listen(1337, '127.0.0.1');

var net = require('net');
var server = net.createServer(function (socket) {
    socket.write("Echo server\r\n");
    socket.pipe(socket);
});
server.listen(1338, '127.0.0.1');
console.log("Net is running...");