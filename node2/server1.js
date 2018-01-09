const http = require('http');

var server = http.createServer(function(request,response){
    console.log(request.url);
    switch(request.url){
        case '/index.html' :
            response.write('1111');
        break;
        case '/2.html':
        response.write('2222');
        break;
        default:
        response.write('404');
        break;
    }
    response.end();
})

server.listen('8088');
