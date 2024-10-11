import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Alert } from '../../models/alert';
import { AlertService } from '../../services/alert.service';
import { UserNavbarComponent } from '../user-components/user-navbar/user-navbar.component';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [UserNavbarComponent, NgFor],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.css'
})
export class AlertsComponent implements OnInit {
  alerts: Alert[] = [];

  constructor() { }

  ngOnInit(): void {
    // Sample data
    this.alerts = [
      {
        title: "Severe Thunderstorm Warning",
        description: "A severe thunderstorm has been detected in your area. Take immediate precautions.",
        severity: "Severe",
        effectiveUtc: "2024-09-23T10:00:00Z",
        effectiveLocal: "2024-09-23 06:00 AM",
        expiresUtc: "2024-09-23T14:00:00Z",
        expiresLocal: "2024-09-23 10:00 AM",
        onsetUtc: "2024-09-23T09:00:00Z",
        onsetLocal: "2024-09-23 05:00 AM",
        endsUtc: "2024-09-23T15:00:00Z",
        endsLocal: "2024-09-23 11:00 AM",
        uri: "https://weather-alerts.example.com/thunderstorm",
        regions: ["New York", "Brooklyn", "Queens"]
      },
      {
        title: "Flash Flood Watch",
        description: "Heavy rain is expected to cause flash flooding. Avoid low-lying areas.",
        severity: "Moderate",
        effectiveUtc: "2024-09-24T06:00:00Z",
        effectiveLocal: "2024-09-24 02:00 AM",
        expiresUtc: "2024-09-24T12:00:00Z",
        expiresLocal: "2024-09-24 08:00 AM",
        onsetUtc: "2024-09-24T04:00:00Z",
        onsetLocal: "2024-09-24 12:00 AM",
        endsUtc: "2024-09-24T14:00:00Z",
        endsLocal: "2024-09-24 10:00 AM",
        uri: "https://weather-alerts.example.com/flash-flood",
        regions: ["Houston", "Galveston", "Sugar Land"]
      }
    ];
  }

}
