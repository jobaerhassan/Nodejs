const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"></input><button type="submit">submit</button> </form></body>');
        res.write('</html>');
        return res.end();
    }




    res.setHeader('content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>hello to node js server</h1></body>')
    res.write('</html>');
    res.end();
});
server.listen(5000);
