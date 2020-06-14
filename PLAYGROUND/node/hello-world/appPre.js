const http = require('http');

const hostname = '192.168.56.102';
const port = 3005;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world');
});

server.listen(port,hostname, () => {
    console.log(`server running at http://${hostname}:${port}`);
})
