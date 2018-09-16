import { TestBed } from '@angular/core/testing';

import { MyappService } from './myapp.service';

describe('MyappService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyappService = TestBed.get(MyappService);
    expect(service).toBeTruthy();
  });
});
