import {Message} from './message.model';

export class Queue {
    id: string;
    name: string;
    capacity : number;
    messageList: Array<Message>;
    constructor(id, name, capacity, messageList){
        this.id = id;
        this.name =  name;
        this.capacity= capacity;
        this.messageList = messageList;
    }
}