import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from '../../services/messageservice';
import { IChat } from '../../interfaces/IChat';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-historybar',
  templateUrl: './historybar.component.html',
  styleUrls: ['./historybar.component.css']
})
export class HistorybarComponent implements OnInit {
  @Input() chats: IChat[] = [];
  

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.getChats();
  }

  getChats() {
    const userId = localStorage.getItem('userId');
    this.http.get<IChat[]>(`https://localhost:7088/Response/${userId}/topics`).subscribe((chats: IChat[]) => {
      this.chats = chats;
    }, (error) => {
      // Handle the case when there are no chats
      this.chats = [];
    });
  }

  clearConversations() {
    const userId = localStorage.getItem('userId');
    this.http.post(`https://localhost:7088/Response/clear-topics/${userId}`, null).subscribe((response) => {
      // clear the chats array after successfully clearing conversations
      this.chats = [];
    }, (error) => {
      console.error(error);
      // handle error
    });
  }

  toggleLightMode() {
    const body = document.querySelector('body');
    body?.classList.toggle('light-mode');
    body?.classList.toggle('dark-mode');
  }

  getHelp() {
    // logic to get help
  }

  logOut() {
    // clear user session information
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    
    // redirect user to login page
    this.router.navigate(['/login']);
  }
}
