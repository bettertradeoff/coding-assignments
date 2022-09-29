import { createAction, props } from '@ngrx/store';
import { CartItem, ShopItem } from './shop';

export enum ShoppingCartActionTypes {
  GET_ALL_CART_ITEM = '[SHOPPING CART] Get All Cart Items',
  GET_ALL_CART_ITEM_SUCCESS = '[SHOPPING CART] Get All Cart Items Success',
  ADD_ITEM_TO_CART = '[SHOPPING CART] Add Item To Cart',
  ADD_ITEM_TO_CART_SUCCESS = '[SHOPPING CART] Add Item To Cart Success',
  REMOVE_ITEM_TO_CART = '[SHOPPING CART] Remove Item To Cart',
  REMOVE_ITEM_TO_CART_SUCCESS = '[SHOPPING CART] Remove Item To Cart Success',
}

export const getAllCartItems = createAction(
  ShoppingCartActionTypes.GET_ALL_CART_ITEM
);

export const getAllCartItemsSuccess = createAction(
  ShoppingCartActionTypes.GET_ALL_CART_ITEM_SUCCESS,
  props<{ response: ShopItem[] }>()
);

export const addItemToCartAction = createAction(
  ShoppingCartActionTypes.ADD_ITEM_TO_CART,
  props<{ item: CartItem }>()
);

export const addItemToCartActionSuccess = createAction(
  ShoppingCartActionTypes.ADD_ITEM_TO_CART_SUCCESS,
  props<{ item: CartItem }>()
);

export const removeItemToCartAction = createAction(
  ShoppingCartActionTypes.REMOVE_ITEM_TO_CART,
  props<{ productId: number }>()
);

export const removeItemToCartActionSuccess = createAction(
  ShoppingCartActionTypes.REMOVE_ITEM_TO_CART_SUCCESS,
  props<{ productId: number }>()
);
