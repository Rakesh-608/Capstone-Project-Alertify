// import { Component } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { Incident } from '../../../models/incident';
// import { IncidentService } from '../../../services/incident.service';
// import { UserNavbarComponent } from '../user-navbar/user-navbar.component';

// @Component({
//   selector: 'app-report-incident',
//   standalone: true,
//   imports: [ReactiveFormsModule, FormsModule, UserNavbarComponent],
//   templateUrl: './report-incident.component.html',
//   styleUrl: './report-incident.component.css'
// })
// export class ReportIncidentComponent {

//   incident: Incident = {
//     location: '',
//     time: new Date(),
//     description: '',
//     incidentType: '',
//     reviewStatus: false  // Default value is set here
//   };

//   constructor(private incidentService: IncidentService) {}

//   submitIncident() {
//     this.incidentService.reportIncident(this.incident).subscribe(response => {
//       console.log('Incident reported successfully:', response);
//       // Handle success (e.g., navigate to a different page or show a success message)
//     }, error => {
//       console.error('Error reporting incident:', error);
//       // Handle error (e.g., show an error message)
//     });
//   }
// }

import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Incident } from '../../../models/incident';
import { IncidentService } from '../../../services/incident.service';
import { UserNavbarComponent } from '../user-navbar/user-navbar.component';

@Component({
  selector: 'app-report-incident',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, UserNavbarComponent],
  templateUrl: './report-incident.component.html',
  styleUrls: ['./report-incident.component.css']
})
export class ReportIncidentComponent {

  incident: Incident = {
    id: '0',          // Default value, might be auto-generated on the backend
    userId: 1234567890,       // Example user ID, replace with the actual user ID
    location: '',
    time: new Date(),
    description: '',
    incidentType: '',
    reviewStatus: false,       // Default value is set here
    dateOfPosted: new Date()   // Current date and time
  };

  constructor(private incidentService: IncidentService) {}

  submitIncident() {
    this.incident.dateOfPosted = new Date(); // Set posted date to the current time

    this.incidentService.reportIncident(this.incident).subscribe(response => {
      console.log('Incident reported successfully:', response);
      // Handle success (e.g., navigate to a different page or show a success message)
    }, error => {
      console.error('Error reporting incident:', error);
      // Handle error (e.g., show an error message)
    });
  }
}
