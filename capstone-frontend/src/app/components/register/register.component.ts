import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Person } from '../../models/person';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgIf, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
}) 
// export class RegisterComponent {
//   // name: string = '';
//   // email: string = '';
//   // password: string = '';
//   // phone: string = '';
//   // address: string = '';
//   // gender: string = '';
//   // age: number | null = null;
//   // emergencyContact: string = '';
//   // errorMessage: string = '';

//   // constructor(private router: Router) {}

//   // onRegister() {
//   //   // Reset error message
//   //   this.errorMessage = '';

//   //   // Validate input fields
//   //   if (!this.name || !this.email || !this.password || 
//   //       !this.phone || !this.address || !this.gender || 
//   //       this.age === null || !this.emergencyContact) {
//   //     this.errorMessage = 'All fields are required.';
//   //     return;
//   //   }

//   //   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   //   if (!emailPattern.test(this.email)) {
//   //     this.errorMessage = 'Please enter a valid email address.';
//   //     return;
//   //   }

//   //   if (this.age < 18 || this.age > 120) {
//   //     this.errorMessage = 'Age must be between 18 and 120.';
//   //     return;
//   //   }

//   //   // Create a user object matching the Person class
//   //   const user = {
//   //     name: this.name,
//   //     email: this.email,
//   //     password: this.password,
//   //     phone: this.phone,
//   //     address: this.address,
//   //     gender: this.gender,
//   //     age: this.age,
//   //     emergencyContact: this.emergencyContact
//   //   };

//   //   // Implement your registration logic here
//   //   console.log('Registering user:', user);
    
//   //   // Redirect or handle post-registration logic
//   //   this.router.navigate(['/login']); // Uncomment to redirect after registration
//   // }

//   // navigateToLogin() {
//   //   this.router.navigate(['/login']);
//   // }

//   registerForm: FormGroup;
//   errorMessage: string = '';

//   constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
//     this.registerForm = this.formBuilder.group({
//       name: ['', Validators.required],
//       role: 'USER',
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]],
//       phone: ['', Validators.required],
//       address: ['', Validators.required],
//       gender: ['', Validators.required],
//       age: [null, [Validators.required, Validators.min(0)]],
//       emergencyContact: ['', Validators.required],
//     });
//   }

//   onRegister() {
//     if (this.registerForm.valid) {
//       const newUser: Person = new Person(
//         this.registerForm.value.name,
//         this.registerForm.value.role,
//         this.registerForm.value.email,
//         this.registerForm.value.password,
//         this.registerForm.value.phone,
//         this.registerForm.value.address,
//         this.registerForm.value.gender,
//         this.registerForm.value.age,
//         this.registerForm.value.emergencyContact
//       );

//       // Call your service to register the user
//       this.userService.createUser(newUser).subscribe(response => {
//         console.log('User registered:', response);
//         this.router.navigate(['/login']); 
//         // Handle success response (e.g., navigate to login page)
//       }, error => {
//         this.errorMessage=error;
//         console.error('Registration error:', error);
//         // Handle error response
//       });
//     }
//   }

//   navigateToLogin() {
//     this.router.navigate(['/login']);
//   }

// }

// export class RegisterComponent {
//   registerForm: FormGroup;
//   errorMessage: string | null = null;

//   // Define properties
//   name: string = '';
//   email: string = '';
//   password: string = '';
//   phone: string = '';
//   address: string = '';
//   gender: string = '';
//   age: number | null = null; // Use null to represent no value initially
//   emergencyContact: string = '';

//   constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
//     this.registerForm = this.formBuilder.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]],
//       phone: ['', Validators.required],
//       address: ['', Validators.required],
//       gender: ['', Validators.required],
//       age: [null, [Validators.required, Validators.min(0)]],
//       emergencyContact: ['', Validators.required],
//     });
//   }

//   onRegister() {
//     if (this.registerForm.valid) {
//       const newUser: Person = new Person(
//         this.name,
//         "User", // Assuming a default role, adjust as necessary
//         this.email,
//         this.password,
//         this.phone,
//         this.address,
//         this.gender,
//         this.age!,
//         this.emergencyContact
//       );

//       this.userService.createUser(newUser).subscribe(response => {
//         console.log('User registered:', response);
//         // Optionally navigate to the login page
//         this.navigateToLogin();
//       }, error => {
//         console.error('Registration error:', error);
//         this.errorMessage = 'Registration failed. Please try again.';
//       });
//     }
//   }

//   navigateToLogin() {
//     this.router.navigate(['/login']);
//   }
// }



// export class RegisterComponent {
//   registerForm: FormGroup;
//   errorMessage: string | null = null;

//   // Define properties
//   name: string = '';
//   email: string = '';
//   password: string = '';
//   phone: string = '';
//   address: string = '';
//   gender: string = '';
//   age: number | null = null; // Use null to represent no value initially
//   emergencyContact: string = '';
//   role: string = 'USER'; // Default role value

//   constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
//     this.registerForm = this.formBuilder.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]],
//       phone: ['', Validators.required],
//       address: ['', Validators.required],
//       gender: ['', Validators.required],
//       age: [null, [Validators.required, Validators.min(0)]],
//       emergencyContact: ['', Validators.required],
//     });
//   }

//   onRegister() {
//     if (this.registerForm.valid) {
//       const newUser: Person = new Person(
//         this.name,
//         this.role, // Use the default role value
//         this.email,
//         this.password,
//         this.phone,
//         this.address,
//         this.gender,
//         this.age!,
//         this.emergencyContact
//       );

//       this.userService.createUser(newUser).subscribe(response => {
//         console.log('User registered:', response);
//         // Optionally navigate to the login page
//         this.navigateToLogin();
//       }, error => {
//         console.error('Registration error:', error);
//         this.errorMessage = 'Registration failed. Please try again.';
//       });
//     }
//   }

//   navigateToLogin() {
//     this.router.navigate(['/login']);
//   }
// }




export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage: string | null = null;
  role: string = 'USER'; // Default role value

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      age: [null, [Validators.required, Validators.min(0)]],
      emergencyContact: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Any additional initialization logic can go here
    this.errorMessage = null; // Reset error message on init
  }

  onRegister() {
    if (this.registerForm.valid) {
      const newUser: Person = new Person(
        this.registerForm.value.name,
        this.role,
        this.registerForm.value.email,
        this.registerForm.value.password,
        this.registerForm.value.phone,
        this.registerForm.value.address,
        this.registerForm.value.gender,
        this.registerForm.value.age!,
        this.registerForm.value.emergencyContact
      );

      // Use the UserService to create the user via HTTP request
      this.userService.createUser(newUser).subscribe(
        (response) => {
          console.log('User registered:', response);
          // Navigate to user dashboard or login page after successful registration
          this.router.navigate(['/login']); // Redirect to the user dashboard
        },
        (error) => {
          console.error('Registration error:', error);
          this.errorMessage = 'Registration failed. Please try again.';
        }
      );
    }
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
