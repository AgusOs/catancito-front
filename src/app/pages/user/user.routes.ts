import { Routes } from "@angular/router";
import { UserContainerComponent } from "./user-container/user-container.component";
import { ProfileComponent } from "./profile/profile.component";
import { StatsComponent } from "./stats/stats.component";

export const userRoutes: Routes = [
    {
        path: '', component: UserContainerComponent, children: [
            { path:'profile', component: ProfileComponent },
            { path:'stats', component: StatsComponent }
        ]
    }
]