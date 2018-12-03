import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  constructor() { }

  // getHeroes(): Observable<Hero[]> {
  //   return of(HEROES);
  // }

  // getMsgs(): Observable<Msg[]> {
  //   return of([
  //     { id: 1,
  //       subject: "one",
  //       body: "all about one"},
  //     { id: 2,
  //       subject: "two",
  //       body: "all about two"}
  //   ]);
  // }
  
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
