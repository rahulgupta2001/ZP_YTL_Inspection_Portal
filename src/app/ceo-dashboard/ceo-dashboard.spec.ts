import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeoDashboard } from './ceo-dashboard';

describe('CeoDashboard', () => {
  let component: CeoDashboard;
  let fixture: ComponentFixture<CeoDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CeoDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeoDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
