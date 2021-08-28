import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  url: string = 'http://localhost:8080/messages';

  constructor(private http: HttpClient) {}

  getMessages() {
    return this.http.get(this.url);
  }

  checkMessage(id: number) {
    return this.http.get(this.url + '/check/' + id);
  }
}
