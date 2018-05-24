import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SearchseminarPage } from '../pages/searchseminar/searchseminar';
import { LoginPage } from '../pages/login/login';
import { StatusstudentPage } from '../pages/statusstudent/statusstudent';
import { StatusnisitdetailPage } from '../pages/statusnisitdetail/statusnisitdetail';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  permission:any;

  rootPage: any = LoginPage;

  pagesStudents: Array<{title: string, component: any}>;
  pagesTeacher: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pagesStudents = [
      { title: 'หน้าแรก', component: HomePage },
      { title: 'ข้อมูลสถานะปัจจุบัน', component: StatusnisitdetailPage },
      { title: 'ค้นหาเอกสาร', component: SearchseminarPage },
    ];

    this.pagesTeacher = [
      { title: 'หน้าแรก', component: HomePage },
      { title: 'ข้อมูลกลุ่มสัมนา', component: StatusstudentPage},
      { title: 'ค้นหาเอกสาร', component: SearchseminarPage }
      
    ]
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.permission = localStorage.getItem("permision");
    });
  }
  checkpermission(per) {
    return Number(localStorage.getItem('permision'));//เช็ค permission ว่ามีค่าเท่าไหร่ให้ returnค่าออกมา
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout(){
    localStorage.clear();//เครียร์ค่าStorage ทั้งหมด
    this.nav.setRoot(LoginPage);
  }
}
