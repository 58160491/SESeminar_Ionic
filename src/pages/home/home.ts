import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomedatestudentProvider } from '../../providers/homedatestudent/homedatestudent';
import { ListstudentdatePage } from '../liststudentdate/liststudentdate';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public date: any; //any เป็นการประกาศตัวแปร opject
  constructor(public navCtrl: NavController,public home: HomedatestudentProvider) {
    this.get_show_date_seminar();
  }

  get_show_date_seminar(){
    this.home.get_dateStutusNisit().then((data)=>{
      this.date = data;
    });
  }
  showNisitdate(data){
    this.navCtrl.push('ListstudentdatePage',data);
    //push การส่งdata ไปที่เพจใหม่
  }

}
