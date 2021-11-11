import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlViaticosComponent } from './control-viaticos.component';

describe('ControlViaticosComponent', () => {
  let component: ControlViaticosComponent;
  let fixture: ComponentFixture<ControlViaticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlViaticosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlViaticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
