import {TestBed} from '@angular/core/testing';

import {NumbersService} from './numbers.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';

describe('NumbersService', () => {
  let service: NumbersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClient]
    });
    service = TestBed.inject(NumbersService);
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });
});
