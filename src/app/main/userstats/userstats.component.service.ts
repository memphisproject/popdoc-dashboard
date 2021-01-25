import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject, from, } from 'rxjs';

import {Users} from './userstats.component.model';
import {UsersLogs} from './userstatsLogs.component.model';

@Injectable({ providedIn: 'root' })

export class UserstatsService {

  private apiUrl = 'https://dev.memphis.io/';
  //private apiUrl = 'https://localhost:3001/';

  constructor(private http: HttpClient, private router: Router) {}

  getAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUrl + 'api/dashboard/allusers' );
  }
  getUsersLogs(id): Observable<UsersLogs[]> {
    return this.http.get<UsersLogs[]>(this.apiUrl + 'api/dashboard/userlogs/' + id );
  }




}
