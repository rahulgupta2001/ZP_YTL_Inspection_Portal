import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-yojna-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './yojna-form.html',
  styleUrls: ['./yojna-form.css']
})
export class YojnaForm {
  yojnaForm: FormGroup;
  selectedFiles: { [key: string]: File } = {};

  // Dropdown options
  options = [
    { value: 'shikshan', label: 'शिक्षण योजना' },
    { value: 'arogya', label: 'आरोग्य योजना' },
    { value: 'krushi', label: 'कृषी योजना' },
    { value: 'ghar', label: 'घरकुल योजना' }
  ];

  constructor(private fb: FormBuilder) {
    this.yojnaForm = this.fb.group({
      yojnaName: ['', Validators.required],
      selectedOption: ['', Validators.required],
      department: ['', Validators.required],
      district: ['', Validators.required],
      block: ['', Validators.required],
      village: ['', Validators.required],
      budget: ['', [Validators.required, Validators.min(1)]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  // File upload handler
  onFileSelect(event: any, field: string) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFiles[field] = file;
      console.log(`${field} selected:`, file);
    }
  }

  // Submit form
  onSubmit() {
    if (this.yojnaForm.valid) {
      console.log('Form Data:', this.yojnaForm.value);
      console.log('Uploaded Files:', this.selectedFiles);
      alert(`योजना तयार झाली ✅ \n${JSON.stringify(this.yojnaForm.value, null, 2)}`);
      this.yojnaForm.reset();
      this.selectedFiles = {};
    }
  }
}
