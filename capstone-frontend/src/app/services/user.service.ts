

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Person } from '../models/person'; // Assuming you have a model for Person

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8100/api/v1/user'; // Adjust the URL as necessary

  constructor(private http: HttpClient) {}

  userId="";
  userEmail="";
  user={};


  getUsers(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }

  createUser(user: Person): Observable<Person> {
    return this.http.post<Person>(this.apiUrl, user,  {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });

    // return this.http.post<Person>(this.apiUrl, user);
  }

  // Fetch a specific user by ID (optional, depending on your requirements)
  getUserById(userId: string): Observable<Person> {
    return this.http.get<Person>(`${this.apiUrl}/getUser/${userId}`);
  }


  // login(username: string, password: string): Observable<any> {
  //   const loginData = { username, password };
  //   return this.http.post(`${this.apiUrl}/login`, loginData, {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  //   });
  // }

  // login(email: string, password: string): Observable<any> {
  //   const loginData = { email, password };

  //   return this.http.post(`${this.apiUrl}/login`, loginData, {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  //     responseType: 'text'  // To handle plain text response from the server
  //   }).pipe(
  //     map((response: string) => {
  //       // If response is plain text, handle it accordingly
  //       try {
  //         return JSON.parse(response);  // Try to parse if it's JSON string
  //       } catch {
  //         return { message: response };  // Return plain text as message
  //       }
  //     }),
  //     catchError(this.handleError)
  //   );
  // }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }).pipe(
      
      // catchError(error => {
      //   console.error('Login failed:', error);
      //   return throwError('Something went wrong with login; please try again later.');
      // })
      map(response => {
        // Assuming the response contains user data, including userId
        // localStorage.setItem('userId', response.id); 
         // Store userId in localStorage
         this.userEmail=email;
        return response;
      }),
      catchError(this.handleError)
    );
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {}, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
    this.userEmail="";
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(() => new Error('Something went wrong with login; please try again later.'));
  }


  isLoggedIn(): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/is-logged-in`);
  }
}

