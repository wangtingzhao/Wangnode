const http = require('http');
const querystring = require('querystring');
var server  = http.createServer(function(req,res){
    var arr = req.url.split('?'),
        url = arr[0];
    var GET = {},obj = querystring.parse(arr[1]);
    console.log(url,obj);
    res.write('2222');
    res.end();
})
server.listen(8089);