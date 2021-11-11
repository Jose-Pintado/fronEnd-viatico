import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosDocumentoComponent } from './datos-documento.component';

describe('DatosDocumentoComponent', () => {
  let component: DatosDocumentoComponent;
  let fixture: ComponentFixture<DatosDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosDocumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
