import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { JsonplaceholderService } from '../services/jsonplaceholder.service';

@Component({
  selector: 'app-ornek',
  templateUrl: './ornek.component.html',
  styleUrls: ['./ornek.component.css']
})
export class OrnekComponent implements OnInit {

  post:Post | undefined;
  constructor(private  jsonPlaceHolderService:JsonplaceholderService) { }

  ngOnInit(): void {

   
  this.jsonPlaceHolderService.getPost(2).subscribe({
next:(x)=>this.post=x,
error:(e)=>console.warn(e),
complete:()=>console.log("istek tamamlandı")


  })


  }

}