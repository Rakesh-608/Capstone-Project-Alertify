import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Incident } from '../../../models/incident';
import { IncidentService } from '../../../services/incident.service';
import { UserNavbarComponent } from '../user-navbar/user-navbar.component';

@Component({
  selector: 'app-view-my-reported-incidents',
  standalone: true,
  imports: [CommonModule, UserNavbarComponent],
  templateUrl: './view-my-reported-incidents.component.html',
  styleUrl: './view-my-reported-incidents.component.css'
})
export class ViewMyReportedIncidentsComponent implements OnInit {
  incidents: Incident[] = [];

  constructor(private incidentService: IncidentService, private router: Router) {}

  ngOnInit(): void {
    this.fetchMyReportedIncidents();
  }

  fetchMyReportedIncidents(): void {
    this.incidentService.getIncidents().subscribe(
      (data: Incident[]) => {
        this.incidents = data; // Filter the incidents as per your requirement
      },
      (error) => {
        console.error('Error fetching incidents:', error);
      }
    );
  }

  viewIncidentDetails(incidentId: string) {
    this.router.navigate(['/incident-details', incidentId]);
  }
}