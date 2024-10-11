import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common'; // Import for common directives like *ngIf and *ngFor
import { Person } from '../../../models/person';
import { UserNavbarComponent } from '../user-navbar/user-navbar.component';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule,UserNavbarComponent,FormsModule], // Import necessary Angular modules
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: Person = {} as Person;
  constructor(private userService: UserService) {
    // Initialize user with example data or fetch from a service
    this.user = {
      id: '1', // Optional
      name: 'John Doe',
      role: 'User',
      email: 'john.doe@example.com',
      password: '', // Do not display or edit passwords directly
      phone: '123-456-7890',
      address: '123 Main St, Anytown, USA',
      gender: 'Male',
      age: 30,
      emergencyContact: '987-654-3210',
    };
  }

  ngOnInit(): void {
    // const userId = localStorage.getItem('userId') !; 
    // Replace with dynamic value if available
    // this.userService.getUserById("1").subscribe(
    //   (data: Person) => {
    //     this.user = data;
    //   },
    //   (error) => {
    //     console.error('Error fetching user:', error);
    //   }
    // );
  }

  // user: Person | null = null;
  // userId: string | null = null;
  // altUser: Person={
  //   id: '1', // Optional
  //       name: 'John Doe',
  //       role: 'User',
  //       email: 'john.doe@example.com',
  //       password: '', // Do not display or edit passwords directly
  //       phone: '123-456-7890',
  //       address: '123 Main St, Anytown, USA',
  //       gender: 'Male',
  //       age: 30,
  //       emergencyContact: '987-654-3210',
  // }

  // constructor(
  //   private userService: UserService,
  //   @Inject(PLATFORM_ID) private platformId: Object // Inject PLATFORM_ID
  // ) {}

  // ngOnInit(): void {
  //   // Only access localStorage if we're running in the browser
  //   if (isPlatformBrowser(this.platformId)) {
  //     this.userId = localStorage.getItem('userId');
  //     if (this.userId) {
  //       this.userService.getUserById(this.userId).subscribe((user: Person) => {
  //         this.user = user;
  //       });
  //     }
  //   } else {
  //     console.log('Not in browser - localStorage is unavailable.');
  //   }
  // }


  }


