import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SouthAfricaMobileNumberComponent} from './south-africa-mobile-number.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {NumbersService} from '../../services/numbers.service';

describe('SouthAfricaMobileNumberComponent', () => {
  let component: SouthAfricaMobileNumberComponent;
  let fixture: ComponentFixture<SouthAfricaMobileNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SouthAfricaMobileNumberComponent],
      providers: [NumbersService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthAfricaMobileNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should function onchange', () => {
    // @ts-ignore
    fetch('../../assets/Pre-selezione. South_African_Mobile_Numbers.csv').then((file: FileList) => {
      component.onChange(file);
      setTimeout(() => expect(fixture.nativeElement.querySelector('.page-count').textContent).toContain('1.000 total'), 100);

    });
  });

  it('should view all valid', () => {
    // @ts-ignore
    fetch('../../assets/Pre-selezione. South_African_Mobile_Numbers.csv').then((file: FileList) => {
      component.onChange(file);
      setTimeout(() => {
        component.viewAllValidNumbers();
        expect(fixture.nativeElement.querySelector('.page-count').textContent).toContain('175 total');
      }, 100);
    });
  });

  it('should view all invalid', () => {
    // @ts-ignore
    fetch('../../assets/Pre-selezione. South_African_Mobile_Numbers.csv').then((file: FileList) => {
      component.onChange(file);
      setTimeout(() => {
        component.viewAllValidNumbers();
        expect(fixture.nativeElement.querySelector('.page-count').textContent).toContain('2 total');
      }, 100);
    });
  });
});
