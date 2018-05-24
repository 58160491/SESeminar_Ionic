import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomedatestudentProvider } from '../../providers/homedatestudent/homedatestudent';

/**
 * Generated class for the ListstudentdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-liststudentdate',
  templateUrl: 'liststudentdate.html',
})
export class ListstudentdatePage {

  public ss_id:number;
  public ss_date:string;
  public num_nisit:number;
  public ss_detail:any;
  public datalist:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public home: HomedatestudentProvider) {
    //navparam เป็นมอดูลที่ใช้เรียกผ่านหน้า
    this.ss_detail = this.navParams.data;
    
    this.ss_id = this.ss_detail.ss_id;
    this.ss_date = this.ss_detail.ss_date;
    this.num_nisit = this.ss_detail.num_nisit;
    //console.log(this.ss_id);
    this.home.get_listDateNisit(this.ss_id).then((data)=>{
      this.datalist = data;
    });
    //console.log(this.ss_detail);
  }

}
