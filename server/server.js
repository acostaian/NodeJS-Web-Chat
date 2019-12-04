const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const publicPath = path.resolve(__dirname, '../public');
const app = express();

let server = http.createServer(app);

port = process.env.port || 3000;

app.use(express.static(publicPath));

// IO = esta es la comunicacion del backend
module.exports.io = socketIO(server);
require('./sockets/socket');

server.listen(port, (err) => {
    if (err) throw new Error(err);
    
    console.log(`Servidor corriendo en el puerto ${port}`);
});


// NODE METHOD
// const http = require('http');
// const fs = require('fs');

// http.createServer((req, res) => {
//     fs.readFile('index.html', (err, data) => {
//         res.writeHead(res.statusCode, {'ContentType': 'text/html'});
//         res.write(data);
//         res.end();
//     });
// }).listen(8080);