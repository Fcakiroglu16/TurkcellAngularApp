import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private helperService:HelperService,private meta:Meta) {}

  ngOnInit(): void {  
this.meta.addTag({name:"author", content:"ahmet yıldız"});
this.meta.addTag({name:"website", content:"www.google.com"});
  console.log(this.helperService.upper("Angular (Second)"))
  }


  show()
  {
    console.log(this.helperService.title);
  }

}