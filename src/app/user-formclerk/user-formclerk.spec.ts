import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormclerk } from './user-formclerk';

describe('UserFormclerk', () => {
  let component: UserFormclerk;
  let fixture: ComponentFixture<UserFormclerk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFormclerk]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFormclerk);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
