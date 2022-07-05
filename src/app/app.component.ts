import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { defer, distinct, filter, find, first, from, fromEvent, interval, last, map, mapTo, mergeMap, Observable, of,delay, range, single, skip, skipUntil, skipWhile, switchMap, take, takeLast, takeWhile, timer, concatMap, toArray, reduce, tap, retry, catchError } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { Post } from './models/post';
import { User } from './models/user';
import { User2 } from './models/user2';
import { JsonplaceholderService } from './services/jsonplaceholder.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

postList:string[]=[];
isLoadingShow:boolean=true;
  title = 'angularapp';
  currencyList:string[]=["Türk Lirası","Dolar"]
  selectCurrency= new FormControl("Türk Lirası")
  constructor(private  jsonPlaceHolderService: JsonplaceholderService) {

  }

  ngOnInit(): void {


this.selectCurrency.valueChanges.subscribe(x=>{

this.jsonPlaceHolderService.setCurrency(x);
})


 }


  
}


