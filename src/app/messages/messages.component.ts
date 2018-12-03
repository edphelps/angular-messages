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

  nextId = 3;
  // msgs = [ ];
  // msgs Msg[] = [
  //   { id: 1,
  //     subject: "one",
  //     body: "all about one"},
  //   { id: 2,
  //     subject: "two",
  //     body: "all about two"}
  // ];

  msgs = MSGS;

  // msgs = Msg[];

  msg: Msg = {
    id: 1,
    subject: 'Windstorm',
    body: "about"
  };

  newMsg: Msg = {
    id: 0,
    subject: 'new subject',
    body: 'new message'
  };

  onclickAdd() {
    console.log("Add");
    // this.newMsg.id = this.nextId++;
    // this.msgs.push(this.newMsg);
    this.newMsg.subject = '';
    this.newMsg.body = '';
  }

  // getMsgs(): void {
  //   this.msgs = this.msgService.getMsgs();
  // }

  // constructor(private msgService: MsgService) {
  // }

  ngOnInit() {
    // this.getMsgs();
  }

}
