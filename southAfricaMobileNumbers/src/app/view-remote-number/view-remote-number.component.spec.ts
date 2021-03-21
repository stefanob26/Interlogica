import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewRemoteNumberComponent} from './view-remote-number.component';
import {NumbersService} from '../../services/numbers.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ViewRemoteNumberComponent', () => {
  let component: ViewRemoteNumberComponent;
  let fixture: ComponentFixture<ViewRemoteNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ViewRemoteNumberComponent],
      providers: [NumbersService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRemoteNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
