import { Component, NgModule, OnInit } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
import { Mission } from '../models/mission';
import { MissiondetailsComponent } from '../mission-details/mission-details.component';


@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'],
})
export class MissionlistComponent implements OnInit {
  colours: string[] = [];
  missions: Mission[] = [];

  constructor(private spacexapiService: SpacexapiService) {}

  ngOnInit(): void {
    this.getMissions();
  }

  getMissions(): void {
    this.spacexapiService.getMissions().subscribe((missions) => {
      this.missions = missions;
    });
  }

  getColours(): void {
    this.spacexapiService.getColours().subscribe((colours) => {
      this.colours = colours;
    });
  }
}
