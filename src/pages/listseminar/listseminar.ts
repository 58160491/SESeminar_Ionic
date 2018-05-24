import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchSeminarProvider } from '../../providers/search-seminar/search-seminar';

/**
 * Generated class for the ListseminarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listseminar',
  templateUrl: 'listseminar.html',
})
export class ListseminarPage {

  public arr_data:any;
  public ss_type:string;
  public ss_year:string;
  public data_search:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public search: SearchSeminarProvider) {
    this.arr_data = this.navParams.data;

    this.ss_year = this.arr_data['0'];
    this.ss_type = this.arr_data['1'];
    this.SearchSeminar(this.ss_year,this.ss_type);
    
    //console.log(this.ss_type);
  }
  SearchSeminar(ss_year,ss_type){
    this.search.get_searchSeminar(ss_year,ss_type).then((data)=>{
      this.data_search = data;
    });
  }

}
