import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Msg } from './msg';
import { MSGS } from './mock-msgs';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  // private msgsUrl = 'api/msgs';  // URL to web api
  private msgsUrl = 'http://localhost:8082/api/messages';  // URL to web api

  constructor(
    private http: HttpClient) { }

  /** GET heroes from the server */
  getMsgs (): Observable<Msg[]> {
    return this.http.get<Msg[]>(this.msgsUrl)
  }

}
