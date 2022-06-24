import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { setupTestingRouterInternal } from '@angular/router/testing';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  loginForm: FormGroup;
  constructor(fb: FormBuilder) {

    this.loginForm = fb.group({
      userName: '', // FormControl();
      password: ''
    })
  }

  ngOnInit(): void {
  }
  signin()
  {
    console.log(this.loginForm.value);
  }

}
