import { TestBed, inject } from '@angular/core/testing';

import { ServiceHeaderService } from './service-header.service';

describe('ServiceHeaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceHeaderService]
    });
  });

  it('should be created', inject([ServiceHeaderService], (service: ServiceHeaderService) => {
    expect(service).toBeTruthy();
  }));
});
