import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {


  price:number=1250;
  mydate=new Date();
  person1:Person= {firstName:"ahmet",lastName:"yıldız",age:23}
  person2:any={first:'hasan',last:'aydın',age:40}
  constructor() { }

  ngOnInit(): void {
  }

}

interface Person
{
firstName:string,
lastName:string,
age:number

}


