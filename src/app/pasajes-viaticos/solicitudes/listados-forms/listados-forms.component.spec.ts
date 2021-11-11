import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadosFormsComponent } from './listados-forms.component';

describe('ListadosFormsComponent', () => {
  let component: ListadosFormsComponent;
  let fixture: ComponentFixture<ListadosFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadosFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadosFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
