import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, switchMap, withLatestFrom } from 'rxjs';
import { ShopService } from '../shop.service';
import { getAllItems, getAllItemsSuccess } from './shop.action';
import { selectAllItems } from './shop.selector';

@Injectable()
export class ShopEffects {
  constructor(
    private actions$: Actions,
    private shopService: ShopService,
    private store: Store
  ) {}

  getAllShopItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllItems),
      withLatestFrom(this.store.pipe(select(selectAllItems))),
      switchMap(([, items]) => {
        if (items.length > 0) {
          return EMPTY;
        }

        return this.shopService
          .get()
          .pipe(map((res) => getAllItemsSuccess({ response: res })));
      })
    )
  );
}
