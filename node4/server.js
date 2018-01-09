const http = require('http');

var server = http.createServer(function(req,res){
    
    var GET = {};
    if(req.url.indexOf('?')!=-1){
        var arr = req.url.split("?")[1],arr2 = arr.split('&'),url = req.url.split("?")[0];
        for(var i=0;i<arr2.length;i++){
          var arr3 =   arr2[i].split('=');
          GET[arr3[0]]= arr3[1]
        }
    }else{
        var url = req.url;
    }
    console.log(url,GET)
    res.write('888');
    res.end();
})

server.listen('8089')