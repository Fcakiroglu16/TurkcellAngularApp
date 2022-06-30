import { Component, OnInit } from '@angular/core';
import { defer, distinct, filter, find, first, from, fromEvent, interval, last, map, mapTo, mergeMap, Observable, of,delay, range, single, skip, skipUntil, skipWhile, switchMap, take, takeLast, takeWhile, timer, concatMap, toArray, reduce, tap, retry, catchError } from 'rxjs';
import { ExampleService } from './example.service';
import { ajax } from 'rxjs/ajax';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'angularapp';
  constructor(private example: ExampleService) {

  }

  ngOnInit(): void {

  var data = interval(1000).pipe(map(val=>{

    if(val>6)
    {
    throw "değer 6'dan büyük olamaz"
    }
    return val;


  }),catchError(e=>of(`hata : ${e}`)))
    

 data.subscribe({
next :(val)=>{console.log(val)},
error:(e)=>{console.log(`bu hata subscribe tarafında ele alındı`)}

 })


  
}

}
