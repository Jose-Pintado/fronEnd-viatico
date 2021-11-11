mport { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralCalendarioComponent } from './general-calendario.component';

describe('GeneralCalendarioComponent', () => {
  let component: GeneralCalendarioComponent;
  let fixture: ComponentFixture<GeneralCalendarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralCalendarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
