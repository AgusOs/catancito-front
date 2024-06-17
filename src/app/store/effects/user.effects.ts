import { Injectable } from "@angular/core";
import { GetTokenService } from "../../core/services/get-token.service";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from "../../core/services/user.service";
import { catchError, concatMap, mergeMap, tap } from "rxjs/operators";
import * as actionAuth from "../actions/user.actions";
import { of } from "rxjs";

@Injectable()
export class AuthEffects {
    
    constructor(
        private action$: Actions,
        private authService: UserService,
        private router: Router
    ) { }

    loginEffect$ = createEffect(() =>
        this.action$.pipe(
            ofType(actionAuth.login),
            mergeMap((action) =>
                this.authService.login({ email: action.email, password: action.password }).pipe(
                    tap((res) => {
                        const token = JSON.stringify({ token: res.token })
                        localStorage.setItem('token', token);
                    }),
                    concatMap((res) => [

                        actionAuth.actionAuthMe({ token: res.token }),

                    ]),
                    catchError((error) => of(actionAuth.authError({ error })))
                )
            )
        )
    );

    registerEffect$ = createEffect(() =>
        this.action$.pipe(
            ofType(actionAuth.register),
            mergeMap((action) =>
                this.authService.register({ email: action.email, user_name: action.user_name, password: action.password }).pipe(
                    tap((res) => {
                        const token = JSON.stringify({ token: res.token })
                        localStorage.setItem('token', token);
                    }),
                    concatMap((res) => [

                        actionAuth.actionAuthMe({ token: res.token }),
                      
                    ]),
                    catchError((error) => of(actionAuth.authError({ error })))
                )
            )
        )
    );

    effectAuthMe$ = createEffect(() =>
        this.action$.pipe(
            ofType(actionAuth.actionAuthMe),
            mergeMap((action) => {
                const { token } = action;

                return this.authService.getUserData(token).pipe(
                    mergeMap((user) => [
                        actionAuth.authAction({ isLogged: true }), //Se dispara effecto ChangePage$
                        actionAuth.getUserAction({ user: user }),
                    ]),
                    catchError((err) => {
                        mergeMap(()=>[
                            actionAuth.authError({ error: err }),
                            
                        ])
                        localStorage.removeItem('token'),
                        this.router.navigate(['login'])
                        return of(actionAuth.logoutAuth({ isLogged: false }))
                    })
                )
            })
        )
    )

    changePage$ = createEffect(() =>
        this.action$.pipe(
            ofType(actionAuth.authAction),
            mergeMap((action) => {
                const { isLogged } = action;
                if (isLogged) {
                    this.router.navigate(['/home']);
                    return of(actionAuth.successAuth());
                }
                else return of(actionAuth.notLogged())
            })
        )
    );
}