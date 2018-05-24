import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusnisitProvider } from '../providers/statusnisit/statusnisit';
import { HomedatestudentProvider } from '../providers/homedatestudent/homedatestudent';
import { HttpModule } from '@angular/http';
import { SearchseminarPage } from '../pages/searchseminar/searchseminar';
import { SearchSeminarProvider } from '../providers/search-seminar/search-seminar';
import { LoginPage } from '../pages/login/login';
import { LoginProvider } from '../providers/login/login';
import { StatusstudentPage } from '../pages/statusstudent/statusstudent';
import { StudentdetailProvider } from '../providers/studentdetail/studentdetail';
import { StatusnisitdetailPage } from '../pages/statusnisitdetail/statusnisitdetail';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchseminarPage,
    LoginPage,
    StatusstudentPage,
    StatusnisitdetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule //เอาไว้ใช้สำหรับไว้เรียกใช้ Http เป็นมอดูล โกบอลของ andular
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchseminarPage,
    LoginPage,
    StatusstudentPage,
    StatusnisitdetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StatusnisitProvider,
    HomedatestudentProvider,
    SearchSeminarProvider,
    LoginProvider,
    StudentdetailProvider
  ]
})
export class AppModule {}
