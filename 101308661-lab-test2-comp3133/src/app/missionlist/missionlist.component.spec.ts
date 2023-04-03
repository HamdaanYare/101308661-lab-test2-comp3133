import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MissionlistComponent } from './missionlist.component';
import { SpacexapiService } from '../network/spacexapi.service';
import { Mission } from '../models/mission';
import { of } from 'rxjs';
import { Router } from '@angular/router';

describe('MissionlistComponent', () => {
  let component: MissionlistComponent;
  let fixture: ComponentFixture<MissionlistComponent>;
  let mockService: jasmine.SpyObj<SpacexapiService>;
  let router: Router;

  beforeEach(async () => {
    mockService = jasmine.createSpyObj('SpacexapiService', ['allLaunch']);
    await TestBed.configureTestingModule({
      declarations: [MissionlistComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: SpacexapiService, useValue: mockService }],
    }).compileComponents();
    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionlistComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a list of missions', () => {
    const missions: Mission[] = [
      new Mission(1, 'Mission 1', '2022', 'Mission 1 details', 'https://example.com/mission1'),
      new Mission(2, 'Mission 2', '2023', 'Mission 2 details', 'https://example.com/mission2'),
    ];
    mockService.allLaunch.and.returnValue(of(missions));
    fixture.detectChanges();

    const missionElements = fixture.nativeElement.querySelectorAll('.mission-item');
    expect(missionElements.length).toBe(missions.length);
    missionElements.forEach((element, index) => {
      const mission = missions[index];
      expect(element.querySelector('.mission-name').textContent).toBe(mission.mission_name);
      expect(element.querySelector('.mission-year').textContent).toBe(mission.launch_year);
      expect(element.querySelector('.mission-details').textContent).toBe(mission.details);
    });
  });

  it('should navigate to the mission details page when clicking on a mission', () => {
    const mission = new Mission(1, 'Mission 1', '2022', 'Mission 1 details', 'https://example.com/mission1');
    mockService.allLaunch.and.returnValue(of([mission]));
    spyOn(router, 'navigate');
    fixture.detectChanges();

    const missionElement = fixture.nativeElement.querySelector('.mission-item');
    missionElement.click();
    expect(router.navigate).toHaveBeenCalledWith(['missions', mission.flight_number]);
  });
});
