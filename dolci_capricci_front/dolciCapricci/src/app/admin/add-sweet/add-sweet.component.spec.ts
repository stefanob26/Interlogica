import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSweetComponent } from './add-sweet.component';

describe('AddSweetComponent', () => {
  let component: AddSweetComponent;
  let fixture: ComponentFixture<AddSweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
