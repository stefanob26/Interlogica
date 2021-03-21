import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveSweetComponent } from './remove-sweet.component';

describe('RemoveSweetComponent', () => {
  let component: RemoveSweetComponent;
  let fixture: ComponentFixture<RemoveSweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveSweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveSweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
