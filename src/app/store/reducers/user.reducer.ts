import { createReducer, on } from "@ngrx/store";
import { User } from "../../core/models/user.interface";
import * as user from "../actions/user.actions";

export interface UserState {
    user?: User
    isLogged: boolean
    loadingAuth: boolean
    error?: any
    token?: any
}

const initialState: UserState = {
    isLogged: false,
    loadingAuth: false
}

export const userReducer = createReducer(
    initialState,
    on(user.login, (state) => ({ ...state, loadingAuth: true })),
    on(user.register, (state) => ({ ...state, loadingAuth: true })),
    on(user.authAction, state => ({...state, isLogged: true})),
    on(user.getUserAction, (state, { user }) => ({ ...state, user, isLogged: true })),
    on(user.authError, (state, { error }) => ({ ...state, loadingAuth: false, error })),
    on(user.actionAuthMe, (state, { token }) => ({ ...state, token, isLogged: true })),
    on(user.successAuth, (state) => ({ ...state, isLogged: true, loadingAuth:false })),
    on(user.logoutAuth, (state, { isLogged }) => ({ ...state, isLogged, loadingAuth:false })),
    on(user.notLogged, (state) => ({ ...state }))
)