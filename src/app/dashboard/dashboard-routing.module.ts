import { FixtureComponent } from './tournament/fixture/fixture.component';
import { NgModule } from "@angular/core";
import { RouterModule ,Routes} from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { TournamentComponent } from './tournament/tournament.component';

const routes:Routes = [
    
    {path: 'dashboard', component:DashboardComponent,

    children: [
       
        {
            path: 'tournaments',
            //component: TournamentComponent,
            loadChildren:()=>import('./tournament/tournament.module') .then(m => m.TournamentModule),
            //component:TournamentComponent
            
            //canDeactivate: [CanDeactivateGuard],
            // resolve: {
            //   crisis: CrisisDetailResolverService
            // }
        },
         
      ]
}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class DashboardRoutingModule {}
