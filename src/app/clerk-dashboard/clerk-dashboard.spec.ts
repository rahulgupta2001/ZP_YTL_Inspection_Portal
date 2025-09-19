import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClerkDashboard } from './clerk-dashboard';

describe('ClerkDashboard', () => {
  let component: ClerkDashboard;
  let fixture: ComponentFixture<ClerkDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClerkDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClerkDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
