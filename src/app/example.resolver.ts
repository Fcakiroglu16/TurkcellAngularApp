import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { delay, Observable, of } from 'rxjs';
import { JsonplaceholderService } from './services/jsonplaceholder.service';

@Injectable({
  providedIn: 'root'
})
export class ExampleResolver implements Resolve<string[]> {
  
  constructor(private jsonPlaceHolder:JsonplaceholderService)
  {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string[]> {
  
return this.jsonPlaceHolder.getPostList(1,10).pipe(delay(5000));

  }
}
