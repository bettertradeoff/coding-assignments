import { createAction, props } from '@ngrx/store';
import { AppState } from './app-state';

export const setStatus = createAction(
  '[API] Status',
  props<{ apiStatus: AppState }>()
);
