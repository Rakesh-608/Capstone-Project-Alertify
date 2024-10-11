import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Incident } from '../../models/incident';
import { IncidentService } from '../../services/incident.service';
import { UserNavbarComponent } from '../user-components/user-navbar/user-navbar.component';

@Component({
  selector: 'app-incident-details',
  standalone: true,
  imports: [CommonModule, UserNavbarComponent, CommonModule],
  templateUrl: './incident-details.component.html',
  styleUrl: './incident-details.component.css'
})
export class IncidentDetailsComponent implements OnInit {
  incident!: Incident;

  constructor(
    private route: ActivatedRoute,
    private incidentService: IncidentService,
    private router: Router // Injecting the Router for navigation
  ) {}

  ngOnInit(): void {
    const incidentId = this.route.snapshot.paramMap.get('id');
    this.loadIncidentDetails(incidentId!);
  }

  loadIncidentDetails(incidentId: string): void {
    // Fetch incident details using the service
    this.incidentService.getIncidentById(incidentId).subscribe((data: Incident) => {
      this.incident = data;
    }, error => {
      console.error('Error loading incident details:', error);
    });
  }

  goBack(): void {
    // Navigate back to the incidents list
    this.router.navigate(['/view-incidents']);
  }
}


// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { IncidentService } from '../../services/incident.service';
// import { Incident } from '../../models/incident';

// @Component({
//   selector: 'app-incident-details',
//   templateUrl: './incident-details.component.html',
//   styleUrls: ['./incident-details.component.css']
// })
// export class IncidentDetailsComponent implements OnInit {
//   incident!: Incident;

//   constructor(private route: ActivatedRoute, private incidentService: IncidentService) {}

//   ngOnInit(): void {
//     const incidentId = this.route.snapshot.paramMap.get('id');
//     this.loadIncidentDetails(incidentId!);
//   }

//   loadIncidentDetails(incidentId: string) {
//     this.incidentService.getIncidentById(incidentId).subscribe((data: Incident) => {
//       this.incident = data;
//     });
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { IncidentService } from '../../services/incident.service';
// import { Incident } from '../../models/incident';

// @Component({
//   selector: 'app-incident-details',
//   templateUrl: './incident-details.component.html',
//   styleUrls: ['./incident-details.component.css']
// })
// export class IncidentDetailsComponent implements OnInit {
//   incident!: Incident;

//   constructor(
//     private route: ActivatedRoute,
//     private incidentService: IncidentService,
//     private router: Router // Injecting the Router for navigation
//   ) {}

//   ngOnInit(): void {
//     const incidentId = this.route.snapshot.paramMap.get('id');
//     this.loadIncidentDetails(incidentId!);
//   }

//   loadIncidentDetails(incidentId: string): void {
//     // Fetch incident details using the service
//     this.incidentService.getIncidentById(incidentId).subscribe((data: Incident) => {
//       this.incident = data;
//     }, error => {
//       console.error('Error loading incident details:', error);
//     });
//   }

//   goBack(): void {
//     // Navigate back to the incidents list
//     this.router.navigate(['/view-incidents']);
//   }
// }

