import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetInfoComponent } from './sweet-info.component';

describe('SweetInfoComponent', () => {
  let component: SweetInfoComponent;
  let fixture: ComponentFixture<SweetInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SweetInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
