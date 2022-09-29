import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [CartComponent, ProductComponent, HomeComponent],
  imports: [CommonModule, ShopRoutingModule],
})
export class ShopModule {}
