#### 监听 listen();
````
    var http = require('http');
    /*
        request   输入 -- 接受信息
        response  输出 -- 输出信息

    */  
    var server = http.createServer(function(request,response){
        // req.url  获取头部路径
        res.write('AAAAAA');  // 在页面上显示
        res.end(); // 结束
    })
    
    server.listen(8080) // 端口号 
````

#### node3 
``````
 文件目录
 ---node
 ----www
 -----2.html
 -----index.html
 ----aaa.txt
 ----server.js

 //文件操作 Flie System 
 //readFile(文件名,回调函数)
    var fs = require('fs');
    // 读取文件信息 aaa.txt 文件要存在;
    fs.readFile('aaa.txt',function(err,data){
        if(err){
            console.log(err);
        }eles{
            console.log(data)  // 输出二进制数据；
            console.log(data.toString()) // 输出字符串
        }
    })
 //writeFile(文件名,内容,回调函数)
    // 写入文件，如果文件不存在，就生成并写入;
    fs.writeFlid('bbb.txt','咋说的就哈空间',function(err){
        console.log(err);
    })
// 结合fs 写一个读取文件
    const http = require('hhtp');
    const fs = require('fs);
    var server =  http.createServer(function(req,res){
        var file_name = './www'+req.url;
        fs.readFile(file_name,function(err,data){
            if(err){
                res.write('404);
            }else{
                res.write(data);
            }
            res.end();
        })
    })
    server.listen('8080')
``````
#### node4
`````
node 获取前台数据 GET 
const http = require('http'),
      urlLib = require('url'),
      querystring = require('querystring');
第一种方法
  var server = http.createServer(function(req,res){
      var GET = {};
      if(req.url.indexOf('?') != -1){
          var arr = req.url.split('?'),
              url = arr[0];
              arr2 = arr[1].split('&');
        for(var i=0;i<arr2.length;i++){
            var arr3 = arr2[i].split('=');
            GET[arr3[0]] = arr3[1];
        }
    
      }else{
          var url  = req.url;
      }
      console.log(url,GET);
      res.write('222');
      res.end();
  })    
  server.listen(8088);
第二种方法
// querystring 只能转成对象 不能获取？前面的路径
 var server = http.createServer(function(req,res){
     var arr = req.url.split('?'),
         url = arr[0],
         GET = querystring.parse(arr[1]);
    console.log(url,GET);
    res.write('222');
    res.end();
 })
server.listen('8089);
第三种方法
// urlLib.parse(url,true); 设置为true query  = {aaa:1111,bbb:222} 
//                         不设置 query = 'aaa=111&bbb=222'
 var server.creatServer(function(req,res){
     var obj = urlLib.parse(url,true),
         url = obj.pathname, // 获取?前面的路径
         GET = obj.query;
    console.log(url,GET);
    res.write('222');
    res.end();
 })
 server.listen(8090);
`````