var http = require('http');
var url = require('url');
var fs = require('fs');

var {name,add} = require('./inc/new');

console.log(name);
console.log(add(5,5));

var server = http.createServer(function(req, res){
    // if(req.url == '/'){
    //     res.writeHead(200,{'Content-Type':'text/html'});
    //     res.write("<h1>this is a Home page</h1>");
    //     res.end();
    // }
    // if(req.url == '/about'){
    //     res.writeHead(200,{'Content-Type':'text/html'});
    //     res.write("<h1>this is a About page</h1>");
    //     res.end();
    // }

    // var urlLink = "https://www.w3schools.com/nodejs/ref_url.asp";
    // var q = url.parse(urlLink, true);
    
    // res.writeHead(200,{'Content-Type':'text/html'});
    //     res.write(q.host);
    //     res.end();


    if(req.url == '/'){

        // fs.readFile('demo.html', function(err, data) {
        //     res.writeHead(200, {'Content-Type': 'text/html'});
        //     res.write(data);
        //     return res.end();
        //   });

        // var data = fs.readFileSync('demo.html');
        //    res.writeHead(200, {'Content-Type': 'text/html'});
        //     res.write(data);
        //    return res.end();



        // fs.writeFile('demo1.text','text demo 3',function(error){
        //    if(error){
        //          res.writeHead(200, {'Content-Type': 'text/html'});
        //             res.write("File write fail");
        //             return res.end();
                
        //    }else {
        //     res.writeHead(200, {'Content-Type': 'text/html'});
        //     res.write("File write Success");
        //     return res.end();
        //    }
        // })

      //   fs.appendFile('demo1.text',' text demo 5',function(error){
      //     if(error){
      //           res.writeHead(200, {'Content-Type': 'text/html'});
      //              res.write("File write fail");
      //              return res.end();
               
      //     }else {
      //      res.writeHead(200, {'Content-Type': 'text/html'});
      //      res.write("File write Success");
      //      return res.end();
      //     }
      //  })

      //  var succses = fs.writeFileSync('demo1Sync.text','text demo sync');
      //  if(succses){
      //       res.writeHead(200, {'Content-Type': 'text/html'});
      //       res.write("File write fail");
      //      return res.end();
       
      //     }else {
      //         res.writeHead(200, {'Content-Type': 'text/html'});
      //         res.write("File write Sucess");
      //         return res.end();
      //     }


      // fs.rename('demo1.text','demonew1.text',function(err){
      //   if(err){
      //              res.writeHead(200, {'Content-Type': 'text/html'});
      //               res.write("File rename fail");
      //               return res.end();
      //   }else{
      //     res.writeHead(200, {'Content-Type': 'text/html'});
      //     res.write("File rename success");
      //     return res.end();
      //   }
      // })


      // fs.unlink('demo1Sync.text',function(err){
      //   if(err){
      //     res.writeHead(200, {'Content-Type': 'text/html'});
      //      res.write("File delete fail");
      //      return res.end();
      //     }else{
      //     res.writeHead(200, {'Content-Type': 'text/html'});
      //     res.write("File delete success");
      //     return res.end();
      //     }
      // })


      //console.log(add(5,6));

    }

  });
  
server.listen(5050);

console.log("Server Run Seccessfully");