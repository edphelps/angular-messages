import { Component, OnInit } from '@angular/core';
import { Msg } from '../msg';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  msg: Msg = {
    id: 1,
    subject: 'what its about',
    body: 'this is the message'
  };

  constructor() { }

  ngOnInit() {
  }

}
