import { TestBed } from '@angular/core/testing';
import { OmdbServiceService } from './omdbService.service';

describe('OmdbServiceService', () => {
  let service: OmdbServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OmdbServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
