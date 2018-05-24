import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { StatusstudentPage } from '../statusstudent/statusstudent';
import { HomePage } from '../home/home';
import { Model } from "../../models/model";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
public login: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loGin: LoginProvider) {
  }

  Login(username,password){
    this.loGin.get_Login(username,password).then((data)=>{
      this.login = data;
      console.log(this.login);
      if(this.login != undefined){
        //console.log('this.login.WgID', this.login.WgID)
        if(this.login.WgID == "16"){
          this.navCtrl.setRoot(HomePage);
          Model.prototype.IdUser = this.login.IdUser;
          Model.prototype.UsName = this.login.UsName;
          localStorage.setItem("permision", this.login.WgID);
      }else if(this.login.WgID == "15"){
          this.navCtrl.setRoot(HomePage);
          Model.prototype.IdUser = this.login.IdUser;
          Model.prototype.UsName = this.login.UsName;
          localStorage.setItem("permision", this.login.WgID);
        }
      }
    });
    
    
  }

}
