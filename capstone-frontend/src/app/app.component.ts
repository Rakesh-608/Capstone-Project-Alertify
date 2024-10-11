import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router'; // Import Router and NavigationEnd
import { UserNavbarComponent } from './components/user-components/user-navbar/user-navbar.component';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,UserNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  isHiddenNavbar: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Initialize isHiddenNavbar based on the current route
    this.updateNavbarVisibility(this.router.url);

    // Subscribe to route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateNavbarVisibility(event.url);
      }
    });
  }

  // Function to update the navbar visibility based on the current route
  private updateNavbarVisibility(url: string) {
    const hiddenRoutes = ['/', '/login', '/register','/landing-page']; // Add your hidden routes here
    this.isHiddenNavbar = hiddenRoutes.includes(url);
  }
}
