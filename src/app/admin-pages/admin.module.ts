import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './home/home.component';
import { MemberComponent } from './member/member.component';
import { ReportComponent } from './report/report.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AdminHomeComponent, MemberComponent, ReportComponent, AdminLayoutComponent],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[AdminHomeComponent,MemberComponent]
})
export class AdminModule { }
