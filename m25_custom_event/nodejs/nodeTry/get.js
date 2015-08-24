//var http = require('http');
//var options = {
//    hostname : 'http://127.0.0.1',
//    port : 1337,
//    method : 'GET',
//    headers : {
//        'Content-Type' : 'application/x-www-form-urlencoded'
//    }
//};
//var request = http.request(options, function (res) {
//    console.log(res);
//});
//request.write('MY name is hejie');
//request.end();


var http = require('http');
http.get('http://127.0.0.1:1337?name=hejie', function (res) {
//    console.log(res);
    var arr = [];
    res.on('data', function (chunk) {
        arr.push(chunk);
    });
    res.on('end', function () {
        arr = Buffer.concat(arr);
        console.log(arr.toString());
    });
});
