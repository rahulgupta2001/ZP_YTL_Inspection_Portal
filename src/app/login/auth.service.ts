import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isLoggedIn(): boolean {
    // Check if a login flag exists in local storage
    return !!localStorage.getItem('isLoggedIn');
  }

  login(): void {
    // In a real app, you would handle API calls here
    // For this example, we just set a flag
    localStorage.setItem('isLoggedIn', 'true');
  }

  logout(): void {
    // Remove the login flag
    localStorage.removeItem('isLoggedIn');
  }
}
