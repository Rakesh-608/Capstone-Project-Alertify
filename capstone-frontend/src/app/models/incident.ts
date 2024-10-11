// export interface Incident {
//     location: string;
//     time: Date;
//     description: string;
//     incidentType: string;
//     reviewStatus: boolean;
//   }
  

export interface Incident {
  id: string;
  userId: number;
  location: string;
  time: Date;
  description: string;
  incidentType: string;
  reviewStatus: boolean;
  dateOfPosted: Date;
}
