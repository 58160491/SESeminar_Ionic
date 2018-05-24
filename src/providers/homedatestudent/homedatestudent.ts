import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the HomedatestudentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HomedatestudentProvider {

  constructor(public http: Http) {
    
  }

  get_dateStutusNisit(){
    return new Promise((resolve,reject) => {
      let url = "https://se.informatics.buu.ac.th/seminar/index.php/sam/Android_REST_API/dateStatusNisit";
      this.http.get(url)
        .map(res => res.json()).subscribe(data => {//subcrib การติดตามว่าถ้ามีการเปลี่ยนแปลงก็จะทำไปเรื่อยๆ
          resolve(data);//เหมื่อนการ return data ออกมาถ้าทำงาน
        }, error => {
          reject(error);//แสดง error ว่าเน็ตใช้ไม่ได้หรืออะไรจะแสดง error
        }
        )
    });
  }
  get_listDateNisit(id){
    return new Promise((resolve,reject) => {
      let url = "https://se.informatics.buu.ac.th/seminar/index.php/sam/Android_REST_API/listStudentDate/"+id;
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
