'use strict';
var fs = require('fs');
var url = require('url');
var path = require('path');
var http = require('http');
//通过命令行参数获取到root目录，没有的话默认是当前目录
var root = path.resolve(process.argv[2] || '.');
//创建服务器
var serverhttp = http.createServer(function (request, response) {
    //获取请求中的path路径
    var pathname = url.parse(request.url).pathname;
    //拼接路径成为本地绝对路径
    var filepath = path.join(root, pathname);
    fs.stat(filepath, function (err, stat) {
        if (!err&&stat.isFile()) {
            //没有出错并且文件是文件而不是文件夹的情况下
            console.log('200'+request.url+'请求文件存在！');
            //返回http code码200 ok
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        }else{
            //文件不存在或者请求的是文件夹的话
            console.log('404'+request.url);
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
});
//服务监听8080端口
serverhttp.listen(8080);

console.log('服务开启： http://127.0.0.1:8080/');