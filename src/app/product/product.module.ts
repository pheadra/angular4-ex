import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductManagementComponent } from './product-management/product-management.component';
import { ProductRoutingModule } from './productRouting.module';


@NgModule({
  imports: [
    CommonModule, ProductRoutingModule
  ],
  declarations: [ProductManagementComponent],
  exports: [ProductManagementComponent]
})
export class ProductModule { }
