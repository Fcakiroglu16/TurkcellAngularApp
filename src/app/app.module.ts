import { NgModule } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AComponent } from './pages/a/a.component';
import { BComponent } from './pages/b/b.component';




@NgModule({
  declarations: [AppComponent, AComponent, BComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers:[
 
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
