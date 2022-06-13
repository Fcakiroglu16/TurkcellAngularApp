import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {


  names:string[]=["ahmet","mehmet","hasan"]

  userList:User[]=[];

  constructor() {

this.userList.push(new User(1,"ahmet","ahmet@outlook.com"))
this.userList.push(new User(1,"ahmet2","ahmet2@outlook.com"))
this.userList.push(new User(1,"ahmet3","ahmet3@outlook.com"))

   }

  ngOnInit(): void {
  }

}
