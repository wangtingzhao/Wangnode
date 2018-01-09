const http = require('http');
const urlLib = require('url');
var server = http.createServer(function(req,res){
    var obj = urlLib.parse(req.url,true),url= obj.pathname,GET = obj.query;
    console.log(url,GET);
    res.write('222');
    res.end();
})

server.listen(8089);