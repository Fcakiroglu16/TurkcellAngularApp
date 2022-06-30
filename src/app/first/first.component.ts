import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../example.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private example:ExampleService) { }

  ngOnInit(): void {

    this.example.myobservable.subscribe({
      next(data) { console.log("First Component :"+data) },
      error(err) { console.log(err) },
      complete() { console.log("First Component :Data yayınlama sona erdi") }

    })
  }

}
