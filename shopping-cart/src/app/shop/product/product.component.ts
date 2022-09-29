import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ShopItem } from '../store/shop';
import { getAllItems } from '../store/shop.action';
import { selectAllItems } from '../store/shop.selector';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products$ = this.store.pipe(select(selectAllItems));

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getAllItems());
  }

  addToCart(item: ShopItem) {}
}
