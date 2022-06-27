import { NgModule } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { HelperService } from './services/helper.service';




//Component-Directive-Pipe
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 
  ],
  providers:[HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
