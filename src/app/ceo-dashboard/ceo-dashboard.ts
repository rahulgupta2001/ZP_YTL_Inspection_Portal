import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // <-- NEW: Import RouterModule

@Component({
  selector: 'app-ceo-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule], // <-- Add RouterModule here
  templateUrl: './ceo-dashboard.html',
  styleUrls: ['./ceo-dashboard.css'],
})
export class CeoDashboard {
  // Any existing code you have in this component
}
