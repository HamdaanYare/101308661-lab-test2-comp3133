import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { AppComponent } from 'angular/src/app/app.component';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { ModelsComponent } from './models/models.component';
import { NetworkComponent } from './network/network.component';

@NgModule({
  declarations: [
    AppComponent,
    MissionlistComponent,
    ModelsComponent,
    NetworkComponent
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
