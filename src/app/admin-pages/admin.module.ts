import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './home/home.component';
import { MemberComponent } from './member/member.component';
import { ReportComponent } from './report/report.component';



@NgModule({
  declarations: [AdminHomeComponent, MemberComponent, ReportComponent],
  imports: [
    CommonModule
  ],
  exports:[AdminHomeComponent,MemberComponent]
})
export class AdminModule { }
