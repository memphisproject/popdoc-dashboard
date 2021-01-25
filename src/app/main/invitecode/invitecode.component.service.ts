import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject, from, } from 'rxjs';

import {InviteCode} from './invitecode.component.model';


@Injectable({ providedIn: 'root' })

export class InvitecodeService {

  private apiUrl = 'https://dev.memphis.io/';
  //private apiUrl = 'https://localhost:3001/';

  constructor(private http: HttpClient, private router: Router) {}

  postInviteCode(data) {
    return this.http.post<InviteCode>(this.apiUrl + 'api/dashboard/invitecode' ,{
      passCode: data.passCode,
      expiration: data.expiration,
      limitNumber: data.limitNumber
    });
  };

  getInviteCodes(): Observable<InviteCode[]> {
    return this.http.get<InviteCode[]>(this.apiUrl + 'api/dashboard/invitecodelist');
  }
  deleteInviteCodes(id): Observable<InviteCode[]> {
    return this.http.delete<InviteCode[]>(this.apiUrl + 'api/dashboard/invitecode/' + id);
  }
}
