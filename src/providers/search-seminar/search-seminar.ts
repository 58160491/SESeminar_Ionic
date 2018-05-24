import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the SearchSeminarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SearchSeminarProvider {

  constructor(public http: Http) {
    //console.log('Hello SearchSeminarProvider Provider');
  }
  get_searchSeminar(year,catecgory){
    return new Promise((resolve,reject) => {
      let url = "https://se.informatics.buu.ac.th/seminar/index.php/sam/Android_REST_API/search_ionic/"+year+"/"+catecgory;
      this.http.get(url)
        .map(res => res.json()).subscribe(data => {//subcrib การติดตามว่าถ้ามีการเปลี่ยนแปลงก็จะทำไปเรื่อยๆ
          resolve(data);//เหมื่อนการ return data ออกมาถ้าทำงาน
        }, error => {
          reject(error);//แสดง error ว่าเน็ตใช้ไม่ได้หรืออะไรจะแสดง error
        }
        )
    });
  }
}
