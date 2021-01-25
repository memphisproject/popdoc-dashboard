import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserstatsService} from './userstats.component.service';
import {Users} from './userstats.component.model';
import {UsersLogs} from './userstatsLogs.component.model';

@Component({
  selector: 'app-userstats',
  templateUrl: './userstats.component.html',
  styleUrls: ['./userstats.component.css']
})
export class UserstatsComponent implements OnInit {

  constructor(private api: UserstatsService) { }
  private Users: Users[] = [];
  private UsersLogs: UsersLogs[] = [];
  showTable = true;
  private loginCounter
  private refreshCounter
  private tileCounter
  private collectionCounter
  private messageCounter
  private user
  private filterUsers: Users[] = [];

  filterItem(value) {
    if (!value) {
      this.filterUsers = [];
    }
    this.filterUsers = Object.assign([], this.Users).filter(
      item =>  item.name.toLowerCase().indexOf(value.toLowerCase()) > -1 || item.email.toLowerCase().indexOf(value.toLowerCase()) > -1 )
  }

  sortActivity(){
    return this.filterUsers.sort((a, b) => {
      return <any>new Date(b.lastActivity) - <any>new Date(a.lastActivity);
    });
  }

  onTabClick(item) {
    this.showTable = false;
    this.user = item;
    this.api.getUsersLogs(item._id).subscribe(logs => {
      logs.forEach(log => {
        this.UsersLogs.push(log);
      });
      //console.log(this.Users);
      this.loginCounter = this.countLogs('Login');
      this.refreshCounter = this.countLogs('Refresh');
      this.tileCounter = this.countLogs('NewTile');
      this.collectionCounter = this.countLogs('NewCollection');
      this.messageCounter = this.countLogs('NewMessage');
    });
  }

  countLogs(type){
   let arr = this.UsersLogs.filter((el)=>{
      if(el.logType == type ) return el;

    });
    return arr.length;
  }


  get sortData() {
    return this.UsersLogs.sort((a, b) => {
      return <any>new Date(b.created) - <any>new Date(a.created);
    });
  }

  ngOnInit() {
    this.fetchUsers();
  }
  fetchUsers() {
    this.api.getAllUsers().subscribe(logs => {
      logs.forEach(log => {
        if (log.name == undefined) log.name = "NONAME";
        if (log.email == undefined) log.email = "NOEMAIL";
        this.Users.push(log);
        this.filterUsers.push(log);
      });
      //console.log(this.Users);
    });
  }

}
