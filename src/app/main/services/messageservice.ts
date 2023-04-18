import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IMessage } from '../interfaces/IMessage';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiUrl = 'https://localhost:7088/Response/'; // replace with your API endpoint

  constructor(private http: HttpClient) { }

  getMessages(userId: number): Observable<IMessage[]> {
    const url = this.apiUrl + userId + '/topics';
    return this.http.get<IMessage[]>(url);
  }

  postMessage(message: IMessage): Observable<IMessage> {
    return this.http.post<IMessage>(this.apiUrl, message);
  }
}
