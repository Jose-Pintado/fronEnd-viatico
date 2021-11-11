import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEditarDocumentoComponent } from './formulario-editar-documento.component';

describe('FormularioEditarDocumentoComponent', () => {
  let component: FormularioEditarDocumentoComponent;
  let fixture: ComponentFixture<FormularioEditarDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioEditarDocumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEditarDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
