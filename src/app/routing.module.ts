import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainDashboardComponent } from './core/main-dashboard/main-dashboard.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'total-summary', component: MainDashboardComponent },
  { path: '', redirectTo: 'total-summary', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
