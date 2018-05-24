import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchSeminarProvider } from '../../providers/search-seminar/search-seminar';
import { ListseminarPage } from '../listseminar/listseminar';

/**
 * Generated class for the SearchseminarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchseminar',
  templateUrl: 'searchseminar.html',
})
export class SearchseminarPage {
  public search: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public SearchSeminar: SearchSeminarProvider) {
  }
  searchfile(year,catecgory){
    // console.log(year+" "+catecgory);
    var id = new Array(year,catecgory);
    //console.log(id);
    this.navCtrl.push('ListseminarPage',id);
    //console.log(this.search);
  }



}
