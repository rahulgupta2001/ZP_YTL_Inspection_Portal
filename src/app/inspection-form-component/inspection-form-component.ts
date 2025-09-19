import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-inspection-form-component',
    standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './inspection-form-component.html',
  styleUrl: './inspection-form-component.css'
})
export class InspectionOfficerComponent {

  inspectionForm: FormGroup;

  yojnas = [
    { value: 'yojna1', label: 'Yojna 1' },
    { value: 'yojna2', label: 'Yojna 2' },
    { value: 'yojna3', label: 'Yojna 3' }
  ];

  inspectionTypes = [
    { value: 'inspection', label: 'Inspection' },
    { value: 'reinspection', label: 'Re-Inspection' }
  ];

  constructor(private fb: FormBuilder) {
    this.inspectionForm = this.fb.group({
      kamName: ['', Validators.required],
      yojnaName: ['', Validators.required],
      inspectionType: ['', Validators.required],
      startDate: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.inspectionForm.valid) {
      console.log('Inspection Officer Allocation:', this.inspectionForm.value);
      alert(`✅ Officer Allocated:\n${JSON.stringify(this.inspectionForm.value, null, 2)}`);
      this.inspectionForm.reset();
    }
  }
}
