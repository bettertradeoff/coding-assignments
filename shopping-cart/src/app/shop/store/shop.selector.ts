import { createFeatureSelector } from '@ngrx/store';
import { ShopItem } from './shop';

export const selectAllItems = createFeatureSelector<ShopItem[]>('shopitems');
