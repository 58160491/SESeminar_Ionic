import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Model } from '../../models/model';
import { StatusnisitProvider } from '../../providers/statusnisit/statusnisit';

/**
 * Generated class for the StatusstudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-statusstudent',
  templateUrl: 'statusstudent.html',
})
export class StatusstudentPage {
  public IdUser:number;
  public UsName:string;
  public group:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public statusnisit: StatusnisitProvider) {
    // console.log(Model.prototype.IdUser);
    // console.log(Model.prototype.UsName);
    this.IdUser = Model.prototype.IdUser;
    this.UsName = Model.prototype.UsName;
    this.get_studentGroup(this.IdUser);
  }
  get_studentGroup(IdUser){
    this.statusnisit.get_searchGroupNisit(IdUser).then((data)=>{
      this.group = data;
    });
   console.log(this.group);
  }


}
