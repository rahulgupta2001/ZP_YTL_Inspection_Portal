import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="gov-header">
      <div class="logo-container">
        <!-- Left Emblem -->
        <img
          src="assets/img2.png"
          alt="Indian Emblem"
          class="emblem left-emblem"
        />

        <!-- Center Text -->
        <div class="header-text">
          <h1 class="header-title">जिल्हा परिषद यवतमाळ</h1>
          <h2 class="header-subtitle">फिल्ड इन्स्पेक्शन पोर्टल</h2>
        </div>

        <!-- Right Emblem -->
        <img
          src="assets/img1.png"
          alt="Maharashtra Emblem"
          class="emblem right-emblem"
        />

        <!-- Logout -->
        <div class="header-actions" *ngIf="isLoggedIn()">
          <button (click)="logout()" class="logout-button">Logout</button>
        </div>
      </div>
    </header>
  `,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private authService: AuthService, private router: Router) {}

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
