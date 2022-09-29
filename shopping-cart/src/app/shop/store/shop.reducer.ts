import { createReducer, on } from '@ngrx/store';
import { ShopItem } from './shop';
import { getAllItemsSuccess } from './shop.action';

export const initialState: ReadonlyArray<ShopItem> = [
  {
    id: 1,
    name: 'Mug',
    price: 10,
  },
  {
    id: 2,
    name: 'Plate',
    price: 25,
  },
  {
    id: 3,
    name: 'Spoon',
    price: 6,
  },
  {
    id: 4,
    name: 'Fork',
    price: 6,
  },
  {
    id: 5,
    name: 'Bowl',
    price: 30,
  },
];

export const shopReducer = createReducer(
  initialState,
  on(getAllItemsSuccess, (state, { response }) => {
    return response;
  })
);
