import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ShopItem } from '../store/shop';
import { addItemToCartAction } from '../store/shop.action';

interface items {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  // products$ = this.store.pipe(select(selectAllItems));
  products$ = [
    {
      id: 2,
      name: 'Plate',
      price: 25,
      quantity: 5,
    },
    {
      id: 4,
      name: 'Fork',
      price: 6,
      quantity: 5,
    },
    {
      id: 3,
      name: 'Spoon',
      price: 6,
      quantity: 5,
    },
    {
      id: 5,
      name: 'Bowl',
      price: 30,
      quantity: 5,
    },
  ];

  constructor(private store: Store) {}

  ngOnInit(): void {}

  addToCart(item: ShopItem) {
    this.store.dispatch(addItemToCartAction({ item: { ...item } }));
  }
}
