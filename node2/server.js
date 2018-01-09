const http = require('http');

// request,response
var server = http.createServer(function(req,res){
    // console.log(req);
    res.write('asjdh');
    res.end()
})

// 监听
server.listen('8888');