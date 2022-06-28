import { NgModule } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageModule } from './pages/page.module';



let isProd:boolean=true;


//Component-Directive-Pipe
@NgModule({
  declarations: [
    AppComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageModule
 
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
