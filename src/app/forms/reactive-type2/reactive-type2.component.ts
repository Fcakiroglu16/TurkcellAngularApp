import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CountryDropMenu } from 'src/app/models/country-drop-menu';

@Component({
  selector: 'app-reactive-type2',
  templateUrl: './reactive-type2.component.html',
  styleUrls: ['./reactive-type2.component.css']
})
export class ReactiveType2Component implements OnInit {

  loginForm:FormGroup;
  countryMenu: CountryDropMenu[] = [{ text: "Seçiniz", value: 0 }, { text: "Türkiye", value: 1 }, { text: "Almanya", value: 2 }, { text: "Fransa", value: 3 }];
  constructor() {

    this.loginForm= new FormGroup({
      userName:new FormControl(),
      password:new FormControl(),
      rememberMe:new FormControl(false),
      country:new FormControl(0)
     
     })

   }
   signin()
   {
     console.log(this.loginForm.value);
   }
  ngOnInit(): void {





  }

}
