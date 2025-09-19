import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css'   // ✅ इथे "styleUrls" ऐवजी "styleUrl"
})
export class UserFormComponent  {
  userForm: FormGroup;

  roles = [
    { value: 'clerk', label: 'Clerk' },
    { value: 'inspection', label: 'Inspection' },
  ];

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('User Data:', this.userForm.value);
      alert(`✅ User Created:\n${JSON.stringify(this.userForm.value, null, 2)}`);
      this.userForm.reset();
    }
  }
}
