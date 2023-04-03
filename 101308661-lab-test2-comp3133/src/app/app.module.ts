import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { AppRoutingModule } from './app-routing.module';
import { MissiondetailsComponent } from './mission-details/mission-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, MissionlistComponent, MissionlistComponent, MissiondetailsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
