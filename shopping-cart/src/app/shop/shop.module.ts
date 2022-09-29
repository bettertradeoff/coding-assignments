import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { shopReducer } from './store/shop.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ShopEffects } from './store/shop.effects';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CartComponent, ProductComponent, HomeComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forFeature('shopitems', shopReducer),
    EffectsModule.forFeature([ShopEffects]),
  ],
})
export class ShopModule {}
