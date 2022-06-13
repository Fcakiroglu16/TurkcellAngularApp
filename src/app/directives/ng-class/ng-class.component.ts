import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  isLarge=true;
  isRedBox=true;
  isBorder=true;
  css:any={large:true,redBox:true,blueBorder:false}
  constructor() { }

  ngOnInit(): void {
  }
  applyClass()
  {
this.isLarge=!this.isLarge;
this.isRedBox=!this.isRedBox;
this.isBorder=!this.isBorder;
  }

}
