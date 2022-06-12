import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-eventclick',
  templateUrl: './eventclick.component.html',
  styleUrls: ['./eventclick.component.css']
})
export class EventclickComponent implements OnInit {

  // one-way binding
  count:number;
  constructor() {
this.count=1;
console.log("Constructor çalıştı");

   }
 

  ngOnInit(): void {
    console.log("ngOnInit çalıştı");
  }

 writeToConsole():void{

  console.log("Click");
 }

 increaseCount():void
 {
this.count++;
 }


}
