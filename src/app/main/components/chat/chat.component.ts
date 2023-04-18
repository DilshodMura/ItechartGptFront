import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IMessage } from '../../interfaces/IMessage';

interface ChatbotResponse {
  message: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  inputMessage = '';
  messages: IMessage[] = [];

  constructor(private http: HttpClient) { }

  sendMessage() {
    // Check if the input message is empty or only contains whitespace
    if (!this.inputMessage || !this.inputMessage.trim()) {
      return;
    }
  
    // Create a new message object with the user's input
    const userMessage: IMessage = {
      id: this.messages.length + 1,
      sender: 'user',
      receiver: 'bot',
      content: this.inputMessage.trim(),
      timestamp: new Date().toISOString(),
      type: 'user'
    };
  
    // Add the user's message to the messages array
    this.messages.push(userMessage);
  
    // Send a POST request to the chatbot API with the user's message as the request body
    const apiUrl = `https://localhost:7088/Response/${localStorage.getItem('userId')}`;
    const requestBody = { message: this.inputMessage };
    this.http.post<ChatbotResponse>(apiUrl, requestBody).subscribe(response => {
      // Create a new message object with the bot's response
      const botMessage: IMessage = {
        id: this.messages.length + 1,
        sender: 'bot',
        receiver: 'user',
        content: response.message,
        timestamp: new Date().toISOString(),
        type: 'bot'
      };
  
      // Add the bot's message to the messages array
      this.messages.push(botMessage);
    });
  
    // Clear the input field
    this.inputMessage = '';
  }
}
