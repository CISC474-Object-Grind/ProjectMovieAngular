import { TestBed } from '@angular/core/testing';

import { AutocompleteTitleService } from './autocompleteTitle.service';

describe('AutocompleteTitleService', () => {
  let service: AutocompleteTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutocompleteTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
