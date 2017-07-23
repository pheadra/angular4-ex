import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryManagementComponent } from './category-management/category-management.component';
import { CategoryRoutingModule } from './categoryRouting.module';

@NgModule({
  imports: [
    CommonModule, CategoryRoutingModule
  ],
  declarations: [CategoryManagementComponent],
  exports: [CategoryManagementComponent]
})
export class CategoryModule { }
