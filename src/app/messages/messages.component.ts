import { Component, OnInit } from '@angular/core';
// import { Msg } from '../msg';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  nextId = 3;
  msgs = [
    { id: 1,
      subject: "one",
      body: "all about one"},
    { id: 2,
      subject: "two",
      body: "all about two"}
  ]

  newMsg = {
    // id: 1,
    subject: 'what its about',
    body: 'this is the message'
  };

  onclickAdd() {
    console.log("Add");
    this.newMsg.id = this.nextId++;
    this.msgs.push(this.newMsg);
    this.newMsg.subject = '';
    this.newMsg.body = '';
  }

  // msg: Msg = {
  //   id: 1,
  //   subject: 'what its about',
  //   body: 'this is the message'
  // };

  constructor() { }

  ngOnInit() {
  }

}
