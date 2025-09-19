import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YojnaForm } from './yojna-form';

describe('YojnaForm', () => {
  let component: YojnaForm;
  let fixture: ComponentFixture<YojnaForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YojnaForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YojnaForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
