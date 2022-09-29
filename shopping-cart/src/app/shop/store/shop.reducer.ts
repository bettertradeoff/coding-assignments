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

    if (itemExist) {
      newItem.quantity = itemExist.quantity + 1;
      cartItem.splice(cartItem.indexOf(itemExist), 1);
    } else {
      newItem.quantity = 1;
    }
    cartItem.push(newItem);

    return cartItem;
  }),
  on(removeItemToCartActionSuccess, (state, { item }) => {
    let cartItem = [...state];
    let newState = { ...item };
    let itemExist = cartItem.find((i) => i.id == item.id);

    if (itemExist) {
      newState.quantity = itemExist.quantity - 1;
      if (newState.quantity == 0) {
        cartItem.splice(cartItem.indexOf(itemExist), 1);
      }
    } else {
      newState.quantity -= 1;
    }
    cartItem.push(newState);
    cartItem.splice(cartItem.indexOf(itemExist), 1);

    return cartItem;
  })
);
