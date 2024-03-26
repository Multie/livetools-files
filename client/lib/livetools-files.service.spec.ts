import { TestBed } from '@angular/core/testing';

import { LivetoolsFilesService } from './livetools-files.service';

describe('LivetoolsFilesService', () => {
  let service: LivetoolsFilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivetoolsFilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
