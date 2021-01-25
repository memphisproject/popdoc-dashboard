import {Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BsLocaleService } from 'ngx-bootstrap';
import * as moment from 'moment';
import {InvitecodeService} from './invitecode.component.service';
import {InviteCode} from './invitecode.component.model';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-invitecode',
  templateUrl: './invitecode.component.html',
  styleUrls: ['./invitecode.component.css']
})
export class InvitecodeComponent implements OnInit {
  private notifier: NotifierService;
  p2;

  @Input() inviteCode: string;
  myForm: FormGroup;
  myDate: any;
  myDateOut: any;
  t1 = true;
  data = {};
  limitNumber = 1;
  InviteCodes: InviteCode[] = [];

  constructor(notifier: NotifierService, private localeService: BsLocaleService, private api: InvitecodeService) {
    (moment as any).fn.toString = function() { return this.format('L'); };
    this.notifier = notifier;
  }

  ngOnInit() {
    this.localeService.use('en');
    this.myDate = moment();
    //console.log(this.myDate);
    this.fetchInviteCodes();
  }

  fetchInviteCodes() {
    this.api.getInviteCodes().subscribe(logs => {
      logs.forEach(log => {
        this.InviteCodes.push(log);
        console.log(log);
      });
    });
  }

  generate() {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( var i = 0; i < 8; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    this.inviteCode = result;
  }

  insertInviteCode() {
    this.data = {
      passCode: this.inviteCode,
      expiration: this.myDate,
      limitNumber: this.limitNumber
    };
    this.api.postInviteCode(this.data).subscribe( logs => {
      console.log('click');
      this.inviteCode = '';
      this.myDate = moment();
      this.limitNumber = 1;
      this.InviteCodes.push(logs);
      this.notifier.notify('success', 'Invite Code Created');

    });
  }


  get sortData() {
    return this.InviteCodes.sort((a, b) => {
      return <any>new Date(b.created) - <any>new Date(a.created);
    });
  }

  toogle1() {
     this.t1 = !this.t1;
  }

  deleteInviteCode(id) {
    this.api.deleteInviteCodes(id).subscribe((data) => {
      console.log('success');
    });

    console.log(this.sortData);

    this.InviteCodes.forEach((el, index) => {
      if (el._id == id) {
        this.InviteCodes.splice(index, 1);
        console.log(index);
        this.notifier.notify('success', 'Invite Code Deleted');
      }

    });

  }
}
