let http = require('http');
let fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {
        res.writeHead(res.statusCode, {'ContentType': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);