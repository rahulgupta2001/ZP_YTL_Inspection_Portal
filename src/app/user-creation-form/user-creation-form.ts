import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-user-creation-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-creation-form.html',
  styleUrls: ['./user-creation-form.css'],
})
export class UserCreationFormComponent implements OnInit {
  userForm!: FormGroup;

  // Array for the role dropdown
  roles: string[] = ['Extension_Officer'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('User created!', this.userForm.value);
      // Here you would typically send the form data to an API
    } else {
      console.log('Form is invalid. Please fill out all required fields.');
      this.userForm.markAllAsTouched();
    }
  }
}
