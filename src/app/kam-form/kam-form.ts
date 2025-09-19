import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-kam-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './kam-form.html',
  styleUrls: ['./kam-form.css']
})
export class KamForm {
  kamForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.kamForm = this.fb.group({
      yojnaName: ['', Validators.required],
      kamaName: ['', Validators.required],
      mandalName: ['', Validators.required],
      gaonTaluka: ['', Validators.required],
      thekedarName: ['', Validators.required],
      thekedarMobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      kamaRakkam: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      prashkiyAdesh: [null, Validators.required],
      kamaAndaj: [null, Validators.required]
    });
  }

  onFileSelect(event: any, controlName: string) {
    const file = event.target.files[0];
    if (file) {
      this.kamForm.patchValue({ [controlName]: file });
    }
  }

  onSubmit() {
    if (this.kamForm.valid) {
      console.log('Form Data:', this.kamForm.value);

      alert(`✅ काम तयार झाले! \n${JSON.stringify(this.kamForm.value, null, 2)}`);

      this.kamForm.reset();
    }
  }
}
