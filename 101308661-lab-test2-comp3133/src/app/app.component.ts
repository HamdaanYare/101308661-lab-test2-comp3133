import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = '101308661-lab-test2-comp3133';
// }
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist/missionlist.component.html', // missionlist.component.html
  styleUrls: ['./missionlist/missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: any[] | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('https://api.spacexdata.com/v3/launches').subscribe(data => {
      this.missions = data;
    });
  }
}
