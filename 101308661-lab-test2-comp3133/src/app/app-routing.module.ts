import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissiondetailsComponent } from './mission-details/mission-details.component';

const routes: Routes = [
  { path: '', component: MissionlistComponent },
  { path: 'details/:id', component: MissiondetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
