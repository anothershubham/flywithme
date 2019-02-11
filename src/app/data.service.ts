import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {

   }
   getUsers(){
     return this.http.get('https://api.chucknorris.io/jokes/random');
   }
   showAllCategories(){
    const body = JSON.stringify({
      "cross_key":1
    })
    console.log(body);
    this.http.get("http://itjunkies.in/cman/apis/fetch_categories_data.php").subscribe(response => this.storeData(response));

  }
  storeData(res){
    console.log(res);
  }
  
}
