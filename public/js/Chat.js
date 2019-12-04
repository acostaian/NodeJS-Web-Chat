export class Chat {
    constructor () {
        this.socket = io();
        this.init();
    }

    init () {
        this.listen();
    }

    listen () {
        // EVENTOS USUARIO
        // Conexion
        this.socket.on('connect', () => {
            console.log('Conectado al servidor');
        }); 

        // Desconexion
        this.socket.on('disconnect', () => {
            console.log('Conexion con el servidor perdida');
        });

        // Recibir Mensaje
        this.socket.on('sendMessage', (data) => {
            console.log(`${data.user}: ${data.message}`);
        });
    }

    sendMessage (msg) {
        // Enviar mensaje
        this.socket.emit('sendMessage', {
            user: 'username',
            message: msg
        }, (resp) => {
            console.log(resp);
        });
    }
}


// let socket = io();

// socket.on('connect', () => {
//     console.log('Conectado al servidor');
// }); 

// socket.on('disconnect', () => {
//     console.log('Conexion con el servidor perdida');
// });

// socket.on('sendMessage', (data) => {
//     console.log(`${data.user}: ${data.message}`);
// });

// // emit Envia informacion
// socket.emit('sendMessage', {
//     user: 'Fernando',
//     message: 'Hola Mundo!'
// }, (resp) => {
//     console.log(resp);
// });