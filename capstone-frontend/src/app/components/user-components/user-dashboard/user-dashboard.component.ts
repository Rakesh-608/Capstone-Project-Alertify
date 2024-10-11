import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../services/location.service';
import { UserNavbarComponent } from '../user-navbar/user-navbar.component';
import { WeatherService } from '../../../services/weather.service';
@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [NgIf,UserNavbarComponent, NgFor],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent implements OnInit {
  latitude!: number;
  longitude!: number;
  weatherData: any;
  weatherAlerts: any;

  constructor(
    private locationService: LocationService,
    private weatherService: WeatherService // Inject the weather service
  ) {}

  ngOnInit(): void {
    this.locationService.getLocation().then((coords) => {
      this.latitude = coords.latitude;
      this.longitude = coords.longitude;
      console.log('Latitude:', this.latitude, 'Longitude:', this.longitude);
      this.fetchWeather(); // Fetch weather after getting location
    }).catch((error) => {
      console.error('Error getting location', error);
    });
  }

  fetchWeather(): void {
    this.weatherService.getCurrentWeather(this.latitude, this.longitude).subscribe(
      (data) => {
        this.weatherData = data;
        console.log('Weather Data:', this.weatherData);
        this.fetchWeatherAlerts(); // Fetch alerts after getting weather
      },
      (error) => {
        console.error('Error fetching weather data', error);
      }
    );
  }

  fetchWeatherAlerts(): void {
    this.weatherService.getWeatherAlerts(this.latitude, this.longitude).subscribe(
      (alerts) => {
        this.weatherAlerts = alerts;
        console.log('Weather Alerts:', this.weatherAlerts);
      },
      (error) => {
        console.error('Error fetching weather alerts', error);
      }
    );
  }
}