import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    MainDashboardComponent,
    PageNotFoundComponent
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    MainDashboardComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule { }
