import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { tap } from 'rxjs';
import { AppState } from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import { selectIsLogged } from '../../store/selectors/user.selector';

export const authGuard : CanActivateFn = (route, state) => {
  
  const store = inject(Store<AppState>)
  const router = inject(Router)

  return store.select(selectIsLogged).pipe(
    tap((isLogged)=>{
      if(!isLogged){
        router.navigate(['login'])
      }
    })
  )
};