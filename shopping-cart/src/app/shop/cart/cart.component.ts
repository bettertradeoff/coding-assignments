import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getAllCartItems, removeItemToCartAction } from '../store/shop.action';
import { selectCartItems } from '../store/shop.selector';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  products$ = this.store.pipe(select(selectCartItems));
  quantity = 0;
  isEmpty: boolean = true;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getAllCartItems());
    this.products$.subscribe((res) => {
      if (res.length == 0) {
        this.isEmpty = true;
      } else {
        this.isEmpty = false;
      }
    });
  }
  removeToCart(item) {
    this.store.dispatch(removeItemToCartAction({ item: item }));
  }
}
