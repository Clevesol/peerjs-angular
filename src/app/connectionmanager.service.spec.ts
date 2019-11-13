import { TestBed } from '@angular/core/testing';

import { ConnectionmanagerService } from './connectionmanager.service';

describe('ConnectionmanagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConnectionmanagerService = TestBed.get(ConnectionmanagerService);
    expect(service).toBeTruthy();
  });
});
