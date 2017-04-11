'use stricts'
var http = require('http');
var sever = http.createServer(function (request, response) {
    console.log(request.method + ':' + request.url);
    response.writeHead('200', { 'Content-Type': 'text/html' });
    response.write('<head><meta charset="utf-8"/></head>');
    response.end('<h1>我的第一个node.js web服务</h1>');
});
sever.listen(8080);
console.log('系统运行在http://127.0.0.1:8080');