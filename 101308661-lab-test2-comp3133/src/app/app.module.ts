import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { AppComponent } from 'angular/src/app/app.component';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { ModelsComponent } from './models/models.component';
import { NetworkComponent } from './network/network.component';
import { MissionfilterComponent } from './missionfilter/missionfilter.component';
import { MissionDetailsComponent } from './mission-details/mission-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MissionlistComponent,
    ModelsComponent,
    NetworkComponent,
    MissionfilterComponent,
    MissionDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
