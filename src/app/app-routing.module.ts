import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-pages/home/home.component';
import { MemberComponent } from './admin-pages/member/member.component';
import { ReportComponent } from './admin-pages/report/report.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'anasayfa', pathMatch:'full'},
{path:"anasayfa",component:HomeComponent},
{path:"hakkimizda",component:AboutComponent},
{path:"iletisim",component:ContactComponent},
{path:"galeri",component:GalleryComponent},
{path:"admin",component:AdminHomeComponent,
children:[
  {path:"uyeler",component:MemberComponent},
  {path:"raporlar",component:ReportComponent},




]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
