import { createReducer, on } from '@ngrx/store';
import { CartItem } from './shop';
import {
  addItemToCartActionSuccess,
  removeItemToCartActionSuccess,
} from './shop.action';

export const initialState: CartItem[] = [];

export const shopReducer = createReducer(
  initialState,

  on(addItemToCartActionSuccess, (state, { item }) => {
    let cartItem = [...state];
    let newItem = { ...item };
    let itemExist = cartItem.find((i) => i.id == newItem.id);
    console.log(itemExist);

    if (itemExist) {
      newItem.quantity = itemExist.quantity + 1;
      cartItem.splice(cartItem.indexOf(itemExist), 1);
    } else {
      newItem.quantity = 1;
    }

    cartItem.push(newItem);
    console.log('newItem: ', cartItem);
    return cartItem;
  }),

  on(removeItemToCartActionSuccess, (state, { productId }) => {
    let cartItem = [...state];

    let itemExist = cartItem.find((i) => i.id == productId);

    return cartItem;
  })
);
