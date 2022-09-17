import { TestBed } from '@angular/core/testing';

import { OUIVALOServiceService } from './ouivaloservice.service';

describe('OUIVALOServiceService', () => {
  let service: OUIVALOServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OUIVALOServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
