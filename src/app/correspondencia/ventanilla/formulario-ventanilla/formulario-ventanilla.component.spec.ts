import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioVentanillaComponent } from './formulario-ventanilla.component';

describe('FormularioVentanillaComponent', () => {
  let component: FormularioVentanillaComponent;
  let fixture: ComponentFixture<FormularioVentanillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioVentanillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioVentanillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
