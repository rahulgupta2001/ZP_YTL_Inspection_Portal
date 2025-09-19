import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionFormComponent } from './inspection-form-component';

describe('InspectionFormComponent', () => {
  let component: InspectionFormComponent;
  let fixture: ComponentFixture<InspectionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InspectionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
