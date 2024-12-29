import { TestBed } from '@angular/core/testing';

import { XcloudService } from './xcloud.service';

describe('XcloudService', () => {
  let service: XcloudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XcloudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
