import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudaIconComponent } from './ayuda-icon.component';

describe('AyudaIconComponent', () => {
  let component: AyudaIconComponent;
  let fixture: ComponentFixture<AyudaIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyudaIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AyudaIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
