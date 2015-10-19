/**
 * Created by james on 2015/10/17.
 */
var http = require("http"),
    url  = require('url'),
    fs = require('fs');

http.createServer(function (req, res) {
    var query = url.parse(req.url, true).query;
    if (!query.r) {
        fs.readFile('C:\Users\james\Documents\GitHub\workAtQmm\m42_post_kpi\client\demo.html', function (err, data) {
            if (err) throw err;
            res.writeHead(200, {
                "Content-Type" : 'text/html'
            });
            res.end(data);
        });
    } else {
        Sql(res);
    }
}).listen(525, '127.0.0.1');

function Sql(res) {
    var sql = require('mssql');
    var config = {
        user: 'qmm',
        password: '123456',
        server: '192.168.31.189', // You can use 'localhost\\instance' to connect to named instance
        database: 'OurQuanMaMa',

        options: {
            encrypt: false // Use this if you're on Windows Azure
        }
    };
    var connection = new sql.Connection(config, function(err) {
        // ... error checks

        // Query

        var request = new sql.Request(connection); // or: var request = connection.request();
        request.query('select sysno, postsysno, editor, score, scoreReason, scoreType, ratingAdmin, ratingTime from Post_kpi', function(err, recordset) {
            console.dir(recordset);
            res.end(recordset);
        });

        // Stored Procedure

//        var request = new sql.Request(connection);
//        request.input('input_parameter', sql.Int, 10);
//        request.output('output_parameter', sql.VarChar(50));
//        request.execute('procedure_name', function(err, recordsets, returnValue) {
//            console.dir(recordsets);
//        });
    });

    connection.on('error', function(err) {
        // ... error handler
    });
}