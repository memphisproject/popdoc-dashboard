import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent} from './main/main.component';
import { UserstatsComponent } from './main/userstats/userstats.component';
import { HomeComponent } from './main/home/home.component';
import { InvitecodeComponent } from './main/invitecode/invitecode.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { UserlogsComponent } from './main/userlogs/userlogs.component';
import { FormsModule } from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap';
import { MomentModule } from 'ngx-moment';

import {NotifierModule, NotifierOptions} from 'angular-notifier';
import { FixedTilesComponent } from './main/fixed-tiles/fixed-tiles.component';
import {ErrorInterceptor} from './_helpers/error.interceptor';
import {JwtInterceptor} from './_helpers/jwt.interceptor';
import {MomentPipe} from './moment.pipe';

const notifierDefaultOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right',
      distance: 12
    },
    vertical: {
      position: 'top',
      distance: 12,
      gap: 10
    }
  }

};



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    MainComponent,
    UserstatsComponent,
    HomeComponent,
    UserlogsComponent,
    InvitecodeComponent,
    FixedTilesComponent,
    MomentPipe
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    MomentModule,
    NotifierModule.withConfig(notifierDefaultOptions)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
