import { Component } from '@angular/core';
import { UserNavbarComponent } from '../user-components/user-navbar/user-navbar.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-sos-page',
  standalone: true,
  imports: [UserNavbarComponent,FormsModule, CommonModule],
  templateUrl: './sos-page.component.html',
  styleUrl: './sos-page.component.css'
})
export class SosPageComponent {

  emergencyTypes = ['Accident', 'Medical', 'Fire', 'Crime', 'Natural Disaster'];
  emergencyServices = ['Hospital', 'Police', 'Firefighters'];

  selectedEmergencyType: string = '';
  selectedService: string = '';
  response: string | null = null;

  sendEmergencyRequest() {
    if (this.selectedEmergencyType && this.selectedService) {
      this.response = `An alert has been sent to the nearest ${this.selectedService} for your ${this.selectedEmergencyType} emergency. They will respond shortly.`;
    } else {
      this.response = 'Please select both the type of emergency and the emergency service.';
    }
  }
}
