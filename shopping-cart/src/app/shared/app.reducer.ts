import { createReducer, on } from '@ngrx/store';
import { AppState } from './app-state';
import { setStatus } from './app.action';

export const initialState: AppState = {
  status: '',
  response: '',
};

export const appReducer = createReducer(
  initialState,
  on(setStatus, (state, { apiStatus }) => {
    return apiStatus;
  })
);
