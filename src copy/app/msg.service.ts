import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Msg } from './msg';
import { MSGS } from './mock-msgs';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  constructor() { }

  // getHeroes(): Observable<Hero[]> {
  //   return of(HEROES);
  // }

  getMsgs(): Observable<Msg[]> {
    return of(MSGS);
  }
  // getMsgs(): Msg[] {
  //   return MSGS;
  // }
}
