// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class LocationService {

//   constructor() { }
// }



// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class LocationService {

//   constructor() { }

//   getLocation(): Promise<{ latitude: number, longitude: number }> {
//     return new Promise((resolve, reject) => {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             const coords = {
//               latitude: position.coords.latitude,
//               longitude: position.coords.longitude
//             };
//             resolve(coords);
//           },
//           (error) => {
//             reject(error);
//           }
//         );
//       } else {
//         reject(new Error('Geolocation is not supported by this browser.'));
//       }
//     });
//   }
// }

// location.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  getLocation(): Promise<{ latitude: number, longitude: number }> {
    return new Promise((resolve, reject) => {
      if (typeof window !== 'undefined' && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const coords = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            };
            resolve(coords);
          },
          (error) => {
            reject(error);
          }
        );
      } else {
        reject(new Error('Geolocation is not supported or running on the server.'));
      }
    });
  }
}


