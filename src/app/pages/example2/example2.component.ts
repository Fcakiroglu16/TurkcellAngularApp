import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example2',
  template:`<h1>İkinci Component</h1><p>{{email}}</p>`,
  styles:[`.h1{color:red}`]
})
export class Example2Component implements OnInit {

  email:string="ahmet@outlook.com"
  constructor() { }

  ngOnInit(): void {
  }

}
