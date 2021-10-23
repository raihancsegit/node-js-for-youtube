var http = require('http');

var server = http.createServer(function(req, res){
    if(req.url == '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<h1>this is a Home page</h1>");
        res.end();
    }
    if(req.url == '/about'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<h1>this is a About page</h1>");
        res.end();
    }
  });
  
server.listen(5000);

console.log("Server Run Seccessfully");