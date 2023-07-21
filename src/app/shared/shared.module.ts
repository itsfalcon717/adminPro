import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    BreadCrumbsComponent,
    SiderbarComponent,
    HeaderComponent,
  ],
  exports:[
    BreadCrumbsComponent,
    SiderbarComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
