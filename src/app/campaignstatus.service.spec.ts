import { TestBed } from '@angular/core/testing';

import { CampaignstatusService } from './campaignstatus.service';

describe('CampaignstatusService', () => {
  let service: CampaignstatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampaignstatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
