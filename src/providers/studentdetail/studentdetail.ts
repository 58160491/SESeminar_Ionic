import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the StudentdetailProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StudentdetailProvider {

  constructor(public http: Http) {
    //console.log('Hello StudentdetailProvider Provider');
  }
  get_searchDetailNisit(id){
    return new Promise((resolve,reject) => {
      let url = "https://se.informatics.buu.ac.th/seminar/index.php/sam/Android_REST_API/get_ps_details_ajax/"+id;
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
