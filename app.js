const http = require('http');

const server = http.createServer((req , res)=> {
    console.log(req);
    process.exit();
})
server.listen(5000);
//(another method) ->  function rqListener(req , res) {

// } 

// http.createServer(rqListener);

// (another method) -> http.createServer(function(req , res){

// });