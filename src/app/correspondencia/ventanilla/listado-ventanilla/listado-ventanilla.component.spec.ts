import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoVentanillaComponent } from './listado-ventanilla.component';

describe('ListadoVentanillaComponent', () => {
  let component: ListadoVentanillaComponent;
  let fixture: ComponentFixture<ListadoVentanillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoVentanillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoVentanillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
