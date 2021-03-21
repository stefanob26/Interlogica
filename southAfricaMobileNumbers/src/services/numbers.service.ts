import {Numbers} from './../models/numbers';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NumbersService {
  constructor(private http: HttpClient) {
  }

  addNumbers(numbers: Numbers[]): Observable<Numbers[]> {
    return this.http.post(`${environment.api}/numbers`, numbers) as Observable<Numbers[]>;
  }

  getAllNumbers(): Observable<Numbers[]> {
    return this.http.get(`${environment.api}/numbers`) as Observable<Numbers[]>;
  }

  getAllFixedNumbers(): Observable<Numbers[]> {
    return this.http.get(`${environment.api}/numbers/fixed`) as Observable<Numbers[]>;
  }
}
