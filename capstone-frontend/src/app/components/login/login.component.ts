import { NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
// export class LoginComponent {

//   loginForm: FormGroup;
//   errorMessage: string = '';

//   constructor(private formBuilder: FormBuilder, private router: Router) {
//     // Initialize the form

//     this.loginForm = this.formBuilder.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]]
//     });
//   }

//   ngOnInit(): void {}

//   onLogin() {
//     // Reset error message
//     this.errorMessage = '';

//     // Check if the form is valid
//     if (this.loginForm.invalid) {
//       this.errorMessage = 'Please fill in all fields correctly.';
//       return;
//     }

//     // Retrieve form values
//     const { email, password } = this.loginForm.value;
//     // C:\Users\285486\Desktop\frontend-project\frontend\src\app\components\user-components\user-dashboard
//     // Implement your login logic here
//     console.log('Logging in with:', email, password);
//     this.router.navigate(['/user-dashboard'])
//    Navigate to admin dashboard if login is successful
      
    
//   }

//   // Helper methods to get form controls
//   get email() {
//     return this.loginForm.get('email');
//   }

//   get password() {
//     return this.loginForm.get('password');
//   }

//   navigateToRegister() {
//     this.router.navigate(['/register']);
//   }

// }

export class LoginComponent {

  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    // Initialize the form
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  // onLogin() {
  //   // Reset error message
  //   this.errorMessage = '';

  //   // Check if the form is valid
  //   if (this.loginForm.invalid) {
  //     this.errorMessage = 'Please fill in all fields correctly.';
  //     return;
  //   }

  //   // Retrieve form values
  //   const { email, password } = this.loginForm.value;

  //   // Call the AuthService to handle login
  //   this.authService.login(email, password).subscribe(
  //     (response) => {
  //       console.log('Login successful:', response);

  //       // Assuming the response contains user role info to differentiate between admin and user
  //       if (response.role === 'user') {
  //         this.router.navigate(['/admin/dashboard']);  // Navigate to admin dashboard
  //       } else {
  //         this.router.navigate(['/user-dashboard']);  // Navigate to user dashboard
  //       }
  //     },
  //     (error) => {
  //       // Handle login error, e.g., invalid credentials
  //       this.errorMessage = 'Invalid username or password.';
  //       console.error('Login failed:', error);
  //     }
  //   );
  // }


  // onLogin() {
  //   this.errorMessage = '';
  
  //   // Check if the form is valid
  //   if (this.loginForm.invalid) {
  //     this.errorMessage = 'Please fill in all fields correctly.';
  //     return;
  //   }
  
  //   const { email, password } = this.loginForm.value;
  
  //   // Implement your login logic here
  //   this.userService.login(email, password).subscribe(
  //     (response) => {
  //       if (response.success) { // Check for successful login
  //         console.log('Login successful:', response);
  //         this.router.navigate(['/user-dashboard']); // Redirect on successful login
  //       } else {
  //         this.errorMessage = 'Invalid login credentials'; // Set error message
  //       }
  //     },
  //     (error) => {
  //       console.error('Login failed:', error);
  //       this.errorMessage = 'An error occurred during login'; // Handle error
  //     }
  //   );
  // }

  onLogin() {
    this.errorMessage = '';
  
    // Check if the form is valid
    if (this.loginForm.invalid) {
      this.errorMessage = 'Please fill in all fields correctly.';
      return;
    }
  
    const { email, password } = this.loginForm.value;
  
    // Call your login service
    this.userService.login(email, password).subscribe(
      (response) => {
        // If you get here, the login was successful
        console.log('Login successful:', response);
        this.router.navigate(['/user-dashboard']); // Redirect on successful login
      },
      (error) => {
        // Handle different status codes if necessary
        if (error.status === 401) {
          this.errorMessage = 'Invalid login credentials';
        } else {
          this.errorMessage = 'An error occurred during login';
        }
        console.error('Login failed:', error);
      }
    );
  }
  
  

  // Helper methods to get form controls
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}