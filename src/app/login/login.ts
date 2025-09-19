import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  showPassword = false;
  errorMessage: string | null = null; // Add a new property for the error message

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username } = this.loginForm.value;
      let userRole: 'ceo' | 'clerk' | 'inspection-officer' | null = null;
      let redirectPath: string | null = null; // Determine the user's role based on username

      if (username === 'ceo') {
        userRole = 'ceo';
        redirectPath = '/ceo-dashboard';
      } else if (username === 'clerk') {
        userRole = 'clerk';
        redirectPath = '/clerk-dashboard';
      } else if (username === 'inspection') {
        userRole = 'inspection-officer';
        redirectPath = '/inspection-dashboard';
      } // Only proceed if a valid user role was found

      if (userRole && redirectPath) {
        this.authService.login(userRole);
        this.router.navigate([redirectPath]);
        this.errorMessage = null; // Clear any previous error message
      } else {
        // Set an error message for invalid credentials
        this.errorMessage = 'Invalid username or password.';
      }
    }
  }
}