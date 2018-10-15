import { TestBed } from '@angular/core/testing';

import { YearsNavbarService } from './years-navbar.service';

describe('YearsNavbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YearsNavbarService = TestBed.get(YearsNavbarService);
    expect(service).toBeTruthy();
  });
});
