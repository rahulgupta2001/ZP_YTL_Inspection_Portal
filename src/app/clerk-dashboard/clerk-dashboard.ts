import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // <-- NEW: Import RouterModule

@Component({
  selector: 'app-clerk-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule], // <-- Add RouterModule here
  templateUrl: './clerk-dashboard.html',
  styleUrls: ['./clerk-dashboard.css'],
})
export class ClerkDashboard {
  // Any existing code you have in this component
}
