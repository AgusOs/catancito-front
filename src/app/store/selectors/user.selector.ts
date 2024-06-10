import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';

export const selectUserState = (state: AppState) => state.user;

export const selectUserAuth = createSelector(
    selectUserState,
    (state) => state.user
  );
  export const selectIsLogged = createSelector(
    selectUserState,
    (state) => state.isLogged
  );
  
  export const selectLoadingAuth = createSelector(
    selectUserState,
    (state) => state.loadingAuth
  )
  export const selectErrorAuth = createSelector(
    selectUserState,
    (state) => state.error
  )