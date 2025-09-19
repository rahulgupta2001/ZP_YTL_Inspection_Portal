

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-formclerk',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-formclerk.html',
  styleUrl: './user-formclerk.css'
})
export class UserFormclerkComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['Inspection']   // permanent role, no input from user
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('User Data:', this.userForm.value);
      alert(`✅ User Created:\n${JSON.stringify(this.userForm.value, null, 2)}`);
      this.userForm.reset({ role: 'Inspection' });  // reset पण केल्यावर role पुन्हा Inspection राहील
    }
  }
}
