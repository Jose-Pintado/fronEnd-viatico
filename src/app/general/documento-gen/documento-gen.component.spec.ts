import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentoGenComponent } from './documento-gen.component';

describe('DocumentoGenComponent', () => {
  let component: DocumentoGenComponent;
  let fixture: ComponentFixture<DocumentoGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentoGenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentoGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
