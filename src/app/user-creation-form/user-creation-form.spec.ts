import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreationForm } from './user-creation-form';

describe('UserCreationForm', () => {
  let component: UserCreationForm;
  let fixture: ComponentFixture<UserCreationForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCreationForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCreationForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
