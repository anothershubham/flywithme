import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from "../data.service";
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(updates: SwUpdate,private data:DataService) { }
  ngOnInit() {
    console.log("sdsdc");
    console.log(this.data.showAllCategories());
    this.data.showAllCategories();
  }

}
