import { Component, OnInit } from '@angular/core';
import {forEach} from '@angular/router/src/utils/collection';
import {Router} from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private state = 'home';
  constructor(private router: Router) {
  }



  ngOnInit() {
    this.router.navigate(['main/home']);

  }

  onMenuClick($event: any) {
  this.state = $event;
  }
}


