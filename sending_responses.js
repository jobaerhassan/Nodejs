const http = require('http');

const server = http.createServer((req, res) => {
    //console.log(req.url, req.headers, req.method);
    //process.exit();
    res.setHeader('content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>hello to node js server</h1></body>')
    res.write('</html>');
    res.sendDate();
    res.end();
})
server.listen(5000);

//next::routing requests