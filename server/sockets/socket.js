const { io } = require('../server');

io.on('connection', (client) => {
    console.log(`Usuario conectado`);

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    client.on('sendMessage', (data, callback) => {
        console.log(`${data.user}: ${data.message}`);

        client.broadcast.emit('sendMessage', data); // BROADCAST es para que todos lo reciban

        //callback("Mensaje Recibido por el Servidor");
    });

    // Emitir mensajes
    client.emit('sendMessage', {
        user: "Server",
        message: "Server message"
    })
});