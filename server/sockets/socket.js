const { io } = require('../server');

let chatList = [];

io.on('connection', (client) => {
    console.log(`Usuario conectado`);

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    client.on('sendMessage', (msg, callback) => {
        chatList.push(msg);                          // Actualizo la lista de chats
        callback(chatList);                          // Devuelvo la lista actualizada                   
        client.broadcast.emit('sendChat', chatList); // Envio la lista a los demas usuarios
    });

    // Emitir mensajes
    client.emit('sendChat', chatList);
});