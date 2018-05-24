import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Model } from '../../models/model';
import { StudentdetailProvider } from '../../providers/studentdetail/studentdetail';

/**
 * Generated class for the StatusnisitdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-statusnisitdetail',
  templateUrl: 'statusnisitdetail.html',
})
export class StatusnisitdetailPage {
  public IdUser:any;
  public UsName:string;
  public title:any;
  public gp_master_name:string;
  public jou_title:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public stuDetail: StudentdetailProvider) {
    this.IdUser = Model.prototype.IdUser;
    //console.log(this.IdUser);
    this.UsName = Model.prototype.UsName;
    this.get_studentData(this.IdUser);
  }

  get_studentData(IdUser){
    this.stuDetail.get_searchDetailNisit(IdUser).then((data)=>{
      //this.detail = data;
      this.title = data[0].thm_title;
      this.gp_master_name = data[0].gp_master_name;
      this.jou_title = data[0].jou_title;
      //console.log(this.title);
    });

    
   
  }

}
