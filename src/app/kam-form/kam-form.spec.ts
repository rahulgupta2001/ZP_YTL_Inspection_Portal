import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KamForm } from './kam-form';

describe('KamForm', () => {
  let component: KamForm;
  let fixture: ComponentFixture<KamForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KamForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KamForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
