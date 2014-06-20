/**
 * Created by a2014 on 14-6-19.
 */
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

    var arr = [];
    var len = 0;
    req.addListener("data", function (postDataChunk) {
        if (url.indexOf('AA') != -1) {
            len += postDataChunk.length;
            arr.push(postDataChunk);
            fs.writeFile('aa.zip', postDataChunk);
        }
    });
    // 数据接收完毕，执行回调函数
    req.addListener("end", function () {
        if (url.indexOf('AA') != -1) {
            var string = '';
//            arr.forEach(function (item) {
//                string += item.toString();
//            })
//            var buf = new Buffer(len);
//            buf.write(string);
//            fs.open('a.png', 'w', function (err, fd) {
//                    fs.write(fd, buf, 0, len, 0, function (a, b, c) {
//                    })
//
//                }
//            )


        }
    });

    var url = req.url;

    if (url == '/') {
        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
        fs.readFile('index.html', 'utf8', function (err, data) {
            res.write(data);
            res.end();
        });

    } else if (url.indexOf('AA') != -1) {
//
    } else {
        var a = url.split('.')[1] == 'js' ? 'application/x-javascript' : 'text/css';
        var u = url.replace('/', '');
        res.writeHead(200, {'Content-Type': +a + ';charset=utf-8'});
        if (u != 'favicon.ico') {
            fs.readFile(url.replace('/', ''), 'utf8', function (err, data) {
                res.write(data);
                res.end();
            });
        }
    }


}).listen(8000, null);