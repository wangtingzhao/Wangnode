#### 监听 listen();
````
    var http = require('http');
    /*
        request   输入 -- 接受信息
        response  输出 -- 输出信息

    */  
    var server = http.createServer(function(request,response){
        res.write('AAAAAA');  // 在页面上显示
        res.end(); // 结束
    })
    
    server.listen(8080) // 端口号 
````