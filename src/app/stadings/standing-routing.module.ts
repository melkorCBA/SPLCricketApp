import { NgModule } from "@angular/core";
import { RouterModule ,Routes} from '@angular/router';

import { StadingsComponent } from './stadings.component';

const routes:Routes = [
    {path: 'standings', component:StadingsComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class StandingRoutingModule {}
