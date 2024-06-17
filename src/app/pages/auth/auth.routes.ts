import { Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { AuthContainerComponent } from "./auth-container/auth-container.component";
import { RegisterComponent } from "./register/register.component";

export const authRoutes: Routes = [
    {
        path: '', component: AuthContainerComponent, children: [
            { path: '', component: LoginComponent },
            { path: 'register', component: RegisterComponent }
        ]
    }
]