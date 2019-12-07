import { Message } from "./Message.js"

export class Chat {

    constructor (chatText, input, chatButton) {
        this.text = chatText;
        this.input = input;
        this.button = chatButton;
        this.chatList = [];

        this.socket = io();
        this.init();
    }

    init () {
        this.listen();
        let msg = new Message("test", "user")
    }

    listen () {
        // EVENTOS DEL SERVIDOR
        // Conexion
        this.socket.on('connect', () => {
            console.log('Conectado al servidor');
        }); 

        // Desconexion
        this.socket.on('disconnect', () => {
            console.log('Conexion con el servidor perdida');
        });

        // Recibir Mensaje
        this.socket.on('sendChat', (chatList) => {
            if (chatList)
                this.updateChat(chatList);
        });
    }

    send () {
        const str = this.input.value;
        
        if (str != "") {
            this.input.value = "";
            const msg = new Message(str, "username");
            this.sendMessage(msg);
        }
    }

    sendMessage (msg) {
        // Enviar mensaje
        this.socket.emit('sendMessage', msg, (resp) => this.updateChat(resp));
    }

    updateChat (chatList) {
        // Debe ser cambiado si se cambia el chat
        let txt = "";

        chatList.forEach(msg => {
            txt += `(${msg.time}) ${msg.user}: ${msg.message}\n`;
        });

        this.text.value = txt;
    }
    
}
