import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-type2',
  templateUrl: './reactive-type2.component.html',
  styleUrls: ['./reactive-type2.component.css']
})
export class ReactiveType2Component implements OnInit {

  loginForm:FormGroup;
  constructor() {

    this.loginForm= new FormGroup({
      userName:new FormControl(),
      password:new FormControl()
     
     })

   }
   signin()
   {
     console.log(this.loginForm.value);
   }
  ngOnInit(): void {





  }

}
