import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../_models/User';
import {AuthenticationService} from '../_services/authentication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private actualState = 'home';
  @Output()
  private menuClick = new EventEmitter();
  user: User;

  constructor(private authService: AuthenticationService) {
    this.user = authService.currentUserValue;
  }

  ngOnInit(): void {}

  onMenuClick(x:string) {
    this.menuClick.emit(x);
    this.actualState = x;
  }
}


