require('./config/config');
const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const publicPath = path.resolve(__dirname, '../public');
const app = express();

let server = http.createServer(app);


app.use(express.static(publicPath));

// app.get('/*', (req, res) => {
//     res.sendFile(publicPath + "/index.html");
// });

// IO = esta es la comunicacion del backend
module.exports.io = socketIO(server);
require('./sockets/socket');

server.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);
    
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});