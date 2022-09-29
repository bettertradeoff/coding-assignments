import { createAction, props } from '@ngrx/store';
import { ShopItem } from './shop';

export enum ShoppingCartActionTypes {
  GET_ALL_ITEM = '[SHOPPING CART] Get All Items',
  GET_ALL_ITEM_SUCCESS = '[SHOPPING CART] Get All Items Success',
  ADD_ITEM_TO_CART = '[SHOPPING CART] Add Item To Cart',
  REMOVE_ITEM_TO_CART = '[SHOPPING CART] Remove Item To Cart',
  REMOVE_ALL_ITEM_TO_CART = '[SHOPPING CART] Remove All Item To Cart',
  UPDATE_ITEM_TO_CART = '[SHOPPING CART] Update Item To Cart',
}

export const getAllItems = createAction(ShoppingCartActionTypes.GET_ALL_ITEM);

export const getAllItemsSuccess = createAction(
  ShoppingCartActionTypes.GET_ALL_ITEM_SUCCESS,
  props<{ response: ShopItem[] }>()
);

export const AddItemToCartAction = createAction(
  ShoppingCartActionTypes.ADD_ITEM_TO_CART,
  props<{ item: ShopItem }>()
);

export const RemoveAllItemToCartAction = createAction(
  ShoppingCartActionTypes.REMOVE_ITEM_TO_CART,
  props<{ productId: number }>()
);

export const UpdateItemToCartAction = createAction(
  ShoppingCartActionTypes.UPDATE_ITEM_TO_CART,
  props<{ item: ShopItem }>()
);
