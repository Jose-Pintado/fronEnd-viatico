import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginGenComponent } from './login-gen.component';

describe('LoginGenComponent', () => {
  let component: LoginGenComponent;
  let fixture: ComponentFixture<LoginGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginGenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
