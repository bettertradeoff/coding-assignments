import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, switchMap, withLatestFrom } from 'rxjs';
import { AppState } from 'src/app/shared/app-state';
import { setStatus } from 'src/app/shared/app.action';
import { ShopService } from '../shop.service';
import {
  addItemToCartAction,
  addItemToCartActionSuccess,
  getAllCartItems,
  getAllCartItemsSuccess,
  removeItemToCartAction,
  removeItemToCartActionSuccess,
} from './shop.action';
import { selectCartItems } from './shop.selector';

@Injectable()
export class ShopEffects {
  constructor(
    private actions$: Actions,
    private shopService: ShopService,
    private store: Store,
    private appStore: Store<AppState>
  ) {}

  getCartItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllCartItems),
      withLatestFrom(this.store.pipe(select(selectCartItems))),
      switchMap(([, items]) => {
        if (items.length > 0) {
          return EMPTY;
        }

        return this.shopService
          .getItem()
          .pipe(map((res) => getAllCartItemsSuccess({ response: res })));
      })
    )
  );

  addItemsToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addItemToCartAction),
      switchMap((action) => {
        this.appStore.dispatch(
          setStatus({ apiStatus: { response: '', status: '' } })
        );

        return this.shopService.addItem(action.item).pipe(
          map((data) => {
            this.appStore.dispatch(
              setStatus({
                apiStatus: { response: '', status: 'success' },
              })
            );

            return addItemToCartActionSuccess({ item: data });
          })
        );
      })
    )
  );

  removeItemsToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeItemToCartAction),
      switchMap((action) => {
        this.appStore.dispatch(
          setStatus({ apiStatus: { response: '', status: '' } })
        );

        return this.shopService.removeItem(action.item).pipe(
          map((data) => {
            this.appStore.dispatch(
              setStatus({
                apiStatus: { response: '', status: 'success' },
              })
            );

            return removeItemToCartActionSuccess({
              item: action.item,
            });
          })
        );
      })
    )
  );
}
