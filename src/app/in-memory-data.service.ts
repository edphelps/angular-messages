
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Msg } from './msg';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const msgs = [
      { id: 1,
        subject: "one 1",
        body: "all about one"},
      { id: 2,
        subject: "two 2",
        body: "all about two"}
    ];
    return {msgs};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(msgs: Msg[]): number {
    return msgs.length > 0 ? Math.max(...msgs.map(msg => msg.id)) + 1 : 11;
  }
}
