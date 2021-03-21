import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetShowGridComponent } from './sweet-show-grid.component';

describe('SweetShowGridComponent', () => {
  let component: SweetShowGridComponent;
  let fixture: ComponentFixture<SweetShowGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SweetShowGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetShowGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
