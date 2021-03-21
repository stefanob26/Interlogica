import {environment} from './../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Sweet} from 'src/models/sweet';

@Injectable({
  providedIn: 'root',
})
export class SweetService {
  baseRoot = '/sweet';

  constructor(private http: HttpClient) {
  }

  getAllSoldable(): Observable<Sweet[]> {
    return this.http.get(
      `${environment.api}${this.baseRoot}/soldable`
    ) as Observable<Sweet[]>;
  }

  getAll(): Observable<Sweet[]> {
    return this.http.get(
      `${environment.api}${this.baseRoot}/getAll`,
      this.getAuthorization()
    ) as Observable<Sweet[]>;
  }

  soldSweet(id: number) {
    return this.http.delete(
      `${environment.api}${this.baseRoot}/sold/${id}`,
      this.getAuthorization()
    ) as Observable<Sweet>;
  }

  private getAuthorization(): {
    headers: {
      Authorization: string
    },
  } {
    return {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
    };
  }
}
