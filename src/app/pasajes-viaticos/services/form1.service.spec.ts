import { TestBed } from '@angular/core/testing';

import { Form1Service } from './form1.service';

describe('Form1Service', () => {
  let service: Form1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Form1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
