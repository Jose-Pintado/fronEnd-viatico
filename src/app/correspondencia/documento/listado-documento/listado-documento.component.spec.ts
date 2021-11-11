import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDocumentoComponent } from './listado-documento.component';

describe('ListadoDocumentoComponent', () => {
  let component: ListadoDocumentoComponent;
  let fixture: ComponentFixture<ListadoDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoDocumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
