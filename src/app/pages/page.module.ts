import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './nav/header/header.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [AboutComponent,ContactComponent,GalleryComponent,HomeComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[AboutComponent,ContactComponent,GalleryComponent,HomeComponent,HeaderComponent]
})
export class PageModule { }