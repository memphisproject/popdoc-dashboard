import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../_models/User';
import { environment } from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

 constructor(private http: HttpClient,  private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('dashboarUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<User>(`${environment.apiUrl}/v1/signin`, { email, password })
      .pipe(map(res => {
        if (res.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('dashboarUser', JSON.stringify(res));
          this.currentUserSubject.next(res);
        }

        return res;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('dashboarUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }
}
