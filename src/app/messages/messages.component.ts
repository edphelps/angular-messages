import { Component, OnInit } from '@angular/core';

import { MsgService } from '../msg.service';
import { Msg } from '../msg';

import { MSGS } from '../mock-msgs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  msgs: Msg[];

  newMsg: Msg = {
    id: 0,
    subject: 'new subject',
    body: 'new message'
  };

  onclickAdd() {
    console.log("Add");

    // this.msgService.addMsg({ name } as Msg)
    this.msgService.addMsg(this.newMsg)
      .subscribe(msg => {
        console.log("added: ", msg);
        this.msgs.push(msg);
      });

    this.newMsg.subject = '';
    this.newMsg.body = '';
  }

  getMsgs(): void {
    this.msgService.getMsgs()
      .subscribe(msgs => this.msgs = msgs);
  }

  constructor(private msgService: MsgService) {
  }

  ngOnInit() {
    this.getMsgs();
  }

}
