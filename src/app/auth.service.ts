import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly LOGIN_KEY = 'isLoggedIn';
  private readonly ROLE_KEY = 'userRole';

  constructor() {}

  // ✅ Check login status
  isLoggedIn(): boolean {
    return localStorage.getItem(this.LOGIN_KEY) === 'true';
  }

  // ✅ Login and store role
  login(role: 'ceo' | 'clerk' | 'inspection-officer'): void {
    localStorage.setItem(this.LOGIN_KEY, 'true');
    localStorage.setItem(this.ROLE_KEY, role);
  }

  // ✅ Logout
  logout(): void {
    localStorage.removeItem(this.LOGIN_KEY);
    localStorage.removeItem(this.ROLE_KEY);
  }

  // ✅ Get current role
  getRole(): 'ceo' | 'clerk' | 'inspection-officer' | null {
    return localStorage.getItem(this.ROLE_KEY) as
      | 'ceo'
      | 'clerk'
      | 'inspection-officer'
      | null;
  }
}
