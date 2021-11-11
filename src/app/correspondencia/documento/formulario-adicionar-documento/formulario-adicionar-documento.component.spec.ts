import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAdicionarDocumentoComponent } from './formulario-adicionar-documento.component';

describe('FormularioAdicionarDocumentoComponent', () => {
  let component: FormularioAdicionarDocumentoComponent;
  let fixture: ComponentFixture<FormularioAdicionarDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAdicionarDocumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAdicionarDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
