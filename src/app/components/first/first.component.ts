import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private helperService:HelperService,private title:Title) { }

  ngOnInit(): void {

 console.log(this.helperService.upper("angular (first)"))
this.title.setTitle("Angular first Component");
  }

  change()
  {
    this.helperService.title="Component A Title";
  }

}
