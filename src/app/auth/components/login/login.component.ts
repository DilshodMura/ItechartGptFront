import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../../interfaces/loginResponse';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private snackBar: MatSnackBar,private router: Router) { }

  onSubmit() {
    // Check if the fields are not empty
    if (!this.username || !this.password) {
      this.errorMessage = 'Please enter both email and password';
      return;
    }
    console.log(this.username,this.password)
    // Send a POST request to the backend with the user's credentials
    const apiUrl = 'https://localhost:7088/Response/login';
    const requestBody = { email: this.username, password: this.password };
    
    this.http.post<LoginResponse>(apiUrl, requestBody)
    .subscribe({
      next: response => {
        console.log(response)
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('refreshToken', response.refreshToken);
        localStorage.setItem('userId', response.userId.toString());
        // Redirect the user to the home page
        this.router.navigate(['/main'])
      },
      error: error => {
        this.snackBar.open('Email or password is incorrect. Please try again', 'Close');
      },
      complete: () => {
        console.log('Subscription complete');
      }
    });
  }
}
