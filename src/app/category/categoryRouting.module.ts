import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryManagementComponent } from './category-management/category-management.component';

const routes: Routes = [{ path: 'category-list', component: CategoryManagementComponent }]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
