import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from "./core/guards/auth.guard";
import { AuthContainerComponent } from './pages/auth/auth-container/auth-container.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { RecoveryPassComponent } from './pages/auth/recovery-pass/recovery-pass.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'auth',
        component: AuthContainerComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'recovery',
                component: RecoveryPassComponent
            },
        ]
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [authGuard]
      },
      {
        path: 'user/:id',
        component: ProfileComponent,
        canActivate: [authGuard]
      },
      { path: '**', redirectTo: '' }

];
