import { User } from './../models/user';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string)  {
    return this.http.post(`${environment.api}/login`, {
      email: email,
      password: password,
    }) as Observable<{ user: User; token: string }>;
  }

  logout() {
    return this.http.delete(`${environment.api}/logout`);
  }
}
