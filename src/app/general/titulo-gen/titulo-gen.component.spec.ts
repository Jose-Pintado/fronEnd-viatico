import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloGenComponent } from './titulo-gen.component';

describe('TituloGenComponent', () => {
  let component: TituloGenComponent;
  let fixture: ComponentFixture<TituloGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloGenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
