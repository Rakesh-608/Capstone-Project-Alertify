// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Incident } from '../models/incident';

// @Injectable({
//   providedIn: 'root'
// })
// export class IncidentService {
//   private apiUrl = 'http://localhost:8080/api/incidents';  // Adjust the URL as needed

//   constructor(private http: HttpClient) { }

//   reportIncident(incident: Incident): Observable<any> {
//     return this.http.post(this.apiUrl, incident);
//   }

//   getIncidents(): Observable<Incident[]> {
//     return this.http.get<Incident[]>(this.apiUrl);
//   }
// }
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Incident } from '../models/incident';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  private apiUrl = 'http://localhost:8100/api/v1/incidents';  // Adjust the URL as needed

  constructor(private http: HttpClient) { }

  // Method to report an incident
  reportIncident(incident: Incident): Observable<any> {
    return this.http.post(this.apiUrl, incident, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // Method to fetch all incidents
  getIncidents(): Observable<Incident[]> {
    return this.http.get<Incident[]>(this.apiUrl);
  }

  // Method to fetch a specific incident by ID
  getIncidentById(incidentId: string): Observable<Incident> {
    return this.http.get<Incident>(`${this.apiUrl}/${incidentId}`);
  }
  
}
