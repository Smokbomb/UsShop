import { TestBed, inject } from '@angular/core/testing';

import { ShirtsService } from './shirts.service';

describe('ShirtsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShirtsService]
    });
  });

  it('should be created', inject([ShirtsService], (service: ShirtsService) => {
    expect(service).toBeTruthy();
  }));
});
