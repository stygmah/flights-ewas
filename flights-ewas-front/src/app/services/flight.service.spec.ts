import { TestBed } from '@angular/core/testing';

import { FlightServiceService } from './flight.service';

describe('FlightServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlightServiceService = TestBed.get(FlightServiceService);
    expect(service).toBeTruthy();
  });
});
