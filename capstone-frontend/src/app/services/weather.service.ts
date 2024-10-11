// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class WeatherService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseUrl = 'https://api.weatherapi.com/v1';
  private apiKey = 'b28fabc4ec324409b9683409240309'; // Replace with your actual API key

  constructor(private http: HttpClient) {}

  getCurrentWeather(lat: number, lon: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/current.json?key=${this.apiKey}&q=${lat},${lon}`);
  }
  getWeatherAlerts(lat: number, lon: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/alerts.json?key=${this.apiKey}&q=${lat},${lon}`);
}

}
