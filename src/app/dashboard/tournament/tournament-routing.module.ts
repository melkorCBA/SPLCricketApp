import { TournamentComponent } from './tournament.component';
import { FixtureComponent } from './fixture/fixture.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { TournamentListComponent } from './tournament-list/tournament-list.component';



const routes: Routes = [
    { path: '', component: TournamentListComponent },

    {
        path: ':id', component: TournamentComponent,

        children: [
            {
                path:'',
                component:FixtureComponent

            },

            {
                path: 'matches',
                component: FixtureComponent
            }]
    },



    // {path:'list', component:TournamentListComponent},
    // {path: ':id', component: FixtureComponent},


]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TournamentRoutingModule { }
