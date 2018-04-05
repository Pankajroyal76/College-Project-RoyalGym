import { TestBed, inject } from '@angular/core/testing';

import { EveryoneService } from './everyone.service';

describe('EveryoneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EveryoneService]
    });
  });

  it('should be created', inject([EveryoneService], (service: EveryoneService) => {
    expect(service).toBeTruthy();
  }));
});
