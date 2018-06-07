import { TestBed, inject } from '@angular/core/testing';

import { ArttoyService } from './arttoy.service';

describe('ArttoyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArttoyService]
    });
  });

  it('should be created', inject([ArttoyService], (service: ArttoyService) => {
    expect(service).toBeTruthy();
  }));
});
