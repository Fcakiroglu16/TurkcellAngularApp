import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './pages/example/example.component';
import { Example2Component } from './pages/example2/example2.component';
import { Example3Component } from './pages/example3/example3.component';
import { EventclickComponent } from './pages/eventclick/eventclick.component';
import { DatapassInputComponent } from './pages/datapass-input/datapass-input.component';
import { TwoWayBindingComponent } from './pages/two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { NgOnchangeHookComponent } from './pages/ng-onchange-hook/ng-onchange-hook.component';


@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    Example2Component,
    Example3Component,
    EventclickComponent,
    DatapassInputComponent,
    TwoWayBindingComponent,
    NgOnchangeHookComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
