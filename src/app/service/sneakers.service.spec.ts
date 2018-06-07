import { TestBed, inject } from '@angular/core/testing';

import { SneakersService } from './sneakers.service';

describe('SneakersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SneakersService]
    });
  });

  it('should be created', inject([SneakersService], (service: SneakersService) => {
    expect(service).toBeTruthy();
  }));
});
