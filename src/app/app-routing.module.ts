import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import {HomeComponent} from './main/home/home.component';
import {InvitecodeComponent} from './main/invitecode/invitecode.component';
import {UserstatsComponent} from './main/userstats/userstats.component';
import {FixedTilesComponent} from './main/fixed-tiles/fixed-tiles.component';
import {AuthGuard} from './_guards/auth.guard';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'main', component: MainComponent,
    children: [
      {path : 'invitecode', component: InvitecodeComponent, canActivate: [AuthGuard]},
      {path : 'home', component: HomeComponent, canActivate: [AuthGuard]},
      {path : 'userslogs', component: UserstatsComponent, canActivate: [AuthGuard]},
      {path : 'fixedTiles', component: FixedTilesComponent, canActivate: [AuthGuard]}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
