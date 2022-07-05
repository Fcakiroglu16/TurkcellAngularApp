import { NgModule } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { OrnekComponent } from './ornek/ornek.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { AComponent } from './shared/a/a.component';
import { BComponent } from './shared/b/b.component';


@NgModule({
  declarations: [AppComponent, OrnekComponent, SearchComponent, AComponent, BComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule
  ],
  providers:[
 
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
