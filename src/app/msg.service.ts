import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  constructor() { }

  getMsgs() {
    return [
      { id: 1,
        subject: "one",
        body: "all about one"},
      { id: 2,
        subject: "two",
        body: "all about two"}
    ];
  }
}
