const http = require('http');
const fs = require('fs');
var server = http.createServer(function(request,response){
    var file_name = './www'+request.url;
    fs.readFile(file_name,function(err,data){
        if(err){
            response.write('404');
        }else{
            response.write(data);
        }
        response.end();
    })

});

server.listen('8089');
/*
    fs   Flie System
    
    异步 多个操作可以同时进行，前一个的操作还没有完成，后一个也能开始

    同步 一个一个完成
*/ 
// readFile(文件名，回调函数) 
// fs.readFile('aaa.txt',function(err,data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//         console.log(data.toString());
//     }
// })

// writeFile(文件名,内容，回调函数)
// fs.writeFile('bbb.txt','askjdhjashd',function(err){
//     console.log(err);
// })
