import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartItem, ShopItem } from './shop';

export const selectCartItems = createFeatureSelector<CartItem[]>('shopitems');
