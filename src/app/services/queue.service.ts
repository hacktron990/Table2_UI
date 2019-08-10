import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Queue } from '../model/queue.model';
import { Message } from '../model/message.model';

@Injectable({
  providedIn: 'root'
})
export class QueueService {

  constructor(private http: HttpClient) { }
  create(path: string, name: string):Queue {
    // let params = new HttpParams();
    // params.set('name', name);
    // const headersConfig = {
    //   'Content-Type': 'application/json',
    //   'Accept': 'application/json',
    //   'name': name
    // };

    // return this.http.get(`${environment.api_url}${path}`, headersConfig);
    let newQueue = new Queue(undefined, "test", undefined, undefined);
    return newQueue;
  }

  getAllQueue(): Array<Queue>{
    let list = new Array<Queue>();
    let messageList = new Array<Message>();
    let message1 = new Message('1001', 'Test message 1'); 
    let message2 = new Message('1002', 'Test message 2'); 
    let message3 = new Message('1003', 'Test message 3'); 
    let message4 = new Message('1004', 'Test message 4'); 
    let message5 = new Message('1005', 'Test message 4');
    messageList.push(message1);
    messageList.push(message2);
    messageList.push(message3);
    messageList.push(message4);
    messageList.push(message5);
    let newQueue = new Queue("1", "test", 50, messageList);

    let messageList1 = new Array<Message>();
    let message11 = new Message('2001', 'Test message 12'); 
    let message21 = new Message('21002', 'Test message 13'); 
    let message31 = new Message('2003', 'Test message 14'); 
    let message41 = new Message('2004', 'Test message 15'); 
    let message51 = new Message('2005', 'Test message 16');
    messageList1.push(message11);
    messageList1.push(message21);
    messageList1.push(message31);
    messageList1.push(message41);
    messageList1.push(message51);
    let newQueue1 = new Queue("1", "test", 50, messageList);
    list.push(newQueue);
    list.push(newQueue1);
    return list;
  }
  enqueue() {
  }

  deque() {

  }


}

  
