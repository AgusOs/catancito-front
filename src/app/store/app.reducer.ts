import { ActionReducerMap } from '@ngrx/store'
import * as user from './reducers/user.reducer'

export interface AppState {
    user:user.UserState,
}

export const appReducers: ActionReducerMap<AppState> = {
    user: user.userReducer
}