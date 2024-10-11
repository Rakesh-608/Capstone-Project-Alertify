import { CommonModule, DatePipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Incident } from '../../models/incident';
import { IncidentService } from '../../services/incident.service';
import { Router } from '@angular/router';  // Import Router
import { UserNavbarComponent } from '../user-components/user-navbar/user-navbar.component';

@Component({
  selector: 'app-view-incidents',
  standalone: true,
  imports: [NgFor, CommonModule, UserNavbarComponent],
  templateUrl: './view-incidents.component.html',
  styleUrl: './view-incidents.component.css'
})
export class ViewIncidentsComponent implements OnInit {
  incidents: Incident[] = [];

  constructor(
    private incidentService: IncidentService,
    private router: Router  // Inject Router
  ) {}

  ngOnInit(): void {
    this.incidents = [
      {
        id: '1',
        userId: 1001,
        location: 'New York, USA',
        time: new Date('2023-09-01T10:00:00'),
        description: 'Power outage in the downtown area.',
        incidentType: 'Power Outage',
        reviewStatus: false,
        dateOfPosted: new Date('2023-09-01T09:00:00')
      },
      {
        id: '2',
        userId: 1002,
        location: 'Berlin, Germany',
        time: new Date('2023-09-15T08:30:00'),
        description: 'Water leakage reported in central district.',
        incidentType: 'Water Leakage',
        reviewStatus: true,
        dateOfPosted: new Date('2023-09-15T07:30:00')
      },
      {
        id: '3',
        userId: 1003,
        location: 'Tokyo, Japan',
        time: new Date('2023-09-20T16:00:00'),
        description: 'Earthquake of 5.2 magnitude near city center.',
        incidentType: 'Earthquake',
        reviewStatus: false,
        dateOfPosted: new Date('2023-09-20T15:00:00')
      }
    ];
  }

  fetchIncidents(): void {
    this.incidentService.getIncidents().subscribe(
      (data: Incident[]) => {
        this.incidents = data;
      },
      (error) => {
        console.error('Error fetching incidents:', error);
      }
    );
  }

  viewIncidentDetails(incidentId: string) {
    this.router.navigate(['/incident-details/', incidentId]);  // Navigate to incident details page
  }
}
