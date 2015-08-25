var http = require('http'),
    url = require('url');
http.createServer(function (req, res){
    var prop = {};
    prop.number = [
        '15755116419'
    ];
    var str = url.parse(req.url).query,
        parts = str.split('&');
    parts.forEach(function (item) {
        if (item.indexOf('jsoncallback') !== -1) {
            res.end(item.split('=')[1] + '(' + JSON.stringify(prop) + ')');
        }
    });
}).listen(520, '127.0.0.1');
console.log("Port:520-I am running...");