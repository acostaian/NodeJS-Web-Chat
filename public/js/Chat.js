export class Chat {

    constructor (chatText, input, chatButton) {
        this.text = chatText;
        this.input = input;
        this.button = chatButton;

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
            if (data.message)
                this.updateChat(data.message);
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

    updateChat (str) {
        let txt = this.text.value;
        if (txt != "")
            this.text.value = `${txt}\nUsername: ${str}`;
        else 
            this.text.value = `username: ${str}`;
    }
    
    send () {
        const str = this.input.value;
        this.input.value = "";
        if (str != "")
            this.sendMessage(str);
        this.updateChat(str);
    }
}
