import { createAction, props } from "@ngrx/store";


export const login = createAction(
    '[AUTH] Loading authentication',
    props<{ email: string, password: string }>()
)

export const authAction = createAction(
    '[AUTH] Login Success',
    props<{ isLogged: boolean }>()
)

export const getUserAction = createAction(
    '[User] Get User Data',
    props<{ user: any }>()
);

export const authError = createAction(
    '[AUTH] Failed to authenticate',
    props<{ error: any }>()

)

export const actionAuthMe = createAction(
    '[AUTH] Searching data',
    props<{ token: any }>()
)

export const successAuth = createAction(
    '[AUTH] Success auth'
)

export const notLogged = createAction(
    '[AUTH] Not logged'
)

export const logoutAuth = createAction(
    '[AUTH] Log out',
    props<{ isLogged: any }>()
) 

export const updateUserInfo = createAction(
    '[User] Updating User Info'
)

export const register = createAction(
    '[User] Register',
    props<{ email: string, user_name: string, password: string }>()
)