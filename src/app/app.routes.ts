import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from "./core/guards/auth.guard";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.routes').then(r => r.authRoutes)
  },
  {
    path: 'match',
    loadChildren: () => import('./pages/matches/matches.routes').then(r => r.matchesRoutes),
  },
  {
    path: 'user/:id',
    loadChildren: () => import('./pages/user/user.routes').then(r => r.userRoutes),
  },
  { path: '**', redirectTo: '' }

];
