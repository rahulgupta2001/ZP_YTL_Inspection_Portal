import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('isLoggedIn');
  }

  // --- NEW: Add a role parameter to the login method ---
  login(role: 'ceo' | 'clerk' | 'inspection-officer'): void {
    localStorage.setItem('isLoggedIn', 'true');
    // --- NEW: Store the user's role ---
    localStorage.setItem('userRole', role);
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    // --- NEW: Remove the user's role on logout ---
    localStorage.removeItem('userRole');
  }

  // --- NEW: Method to get the logged-in user's role ---
  getRole(): string | null {
    return localStorage.getItem('userRole');
  }
}
