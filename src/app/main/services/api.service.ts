import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMessage } from '../interfaces/IMessage';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiEndpoint = 'http://example.com/api/messages';

  constructor(private http: HttpClient) {}

  getMessages(): Observable<IMessage[]> {
    return this.http.get<IMessage[]>(this.apiEndpoint);
  }
}
