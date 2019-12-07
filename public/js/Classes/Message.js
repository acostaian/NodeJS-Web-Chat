export class Message {

    constructor (message, user) {
        this.message = message;
        this.user = user;
        this.init();
    }

    init () {
        const date = new Date();
        this.time = `${date.getHours()}:${date.getSeconds()}`;
    }
}