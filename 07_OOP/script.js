'use strict';

class Message {
    constructor(text, sender, type) {
        this.text = text;
        this.sender = sender;
        this.type = type;
    }
    send () {
        console.log(`${this.type} from ${this.sender}: ${this.text}`);
        console.log('sent to server ✔')
    }
}

class UserMessage extends Message {
    constructor(text, sender) {
        super(text, sender, 'user-message');
    }
}

class UnregisteredUserMessage extends UserMessage {
    constructor(text) {
        super(text, '__unregistered-user__');
        this.type = '!unregistered-user-message'
    }
}

class ErrorMessage extends Message {
    constructor(text, sender) {
        super(text, sender, 'error-message');
        this.sender = `* ${this.sender} * `;
    }
}

const usrMessage = new UserMessage('hi, I am user', 'User John');
const unUsrMessage = new UnregisteredUserMessage('hi, I am anonymous');
const errMessage = new ErrorMessage('we have an error', 'event handler');

const messages = [usrMessage, unUsrMessage, errMessage];

messages.forEach(msg => {
    msg.send();
});