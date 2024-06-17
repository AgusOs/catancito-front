import { Routes } from "@angular/router";
import { MatchesComponent } from "./matches/matches.component";
import { NewMatchComponent } from "./new-match/new-match.component";
import { MatchComponent } from "./match/match.component";

export const matchesRoutes = [
    {
        path:'', component: MatchComponent, children: [
            { path: 'new-match', component: NewMatchComponent }, //Nueva partida
            { path: 'matches', component: MatchesComponent } //Historico, filtros, estadisticas
        ]
    }
]