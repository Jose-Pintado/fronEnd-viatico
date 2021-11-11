import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEliminarDocumentoComponent } from './formulario-eliminar-documento.component';

describe('FormularioEliminarDocumentoComponent', () => {
  let component: FormularioEliminarDocumentoComponent;
  let fixture: ComponentFixture<FormularioEliminarDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioEliminarDocumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEliminarDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
