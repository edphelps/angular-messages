import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Msg } from './msg';
import { MSGS } from './mock-msgs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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

  /** POST: add a new hero to the server */
  addMsg (msg: Msg): Observable<Msg> {
    return this.http.post<Msg>(this.msgsUrl, msg, httpOptions);
}

}
