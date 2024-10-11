import { Routes } from '@angular/router';
import { AlertsComponent } from './components/alerts/alerts.component';
import { IncidentDetailsComponent } from './components/incident-details/incident-details.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SosPageComponent } from './components/sos-page/sos-page.component';
import { ReportIncidentComponent } from './components/user-components/report-incident/report-incident.component';
import { UserDashboardComponent } from './components/user-components/user-dashboard/user-dashboard.component';
import { AccidentReportComponent } from './components/accident-report/accident-report.component';
import { UserProfileComponent } from './components/user-components/user-profile/user-profile.component';
import { ViewMyReportedIncidentsComponent } from './components/user-components/view-my-reported-incidents/view-my-reported-incidents.component';
import { ViewIncidentsComponent } from './components/view-incidents/view-incidents.component';

export const routes: Routes = [
    { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'landing-page', component: LandingPageComponent },
    { path: 'user-dashboard', component: UserDashboardComponent },
    { path: 'sos-page', component: SosPageComponent },
    {path:'accident-report',component:AccidentReportComponent},
    {path:'user-profile',component:UserProfileComponent},
    { path:'alerts',component:AlertsComponent},
    { path:'report-incident',component:ReportIncidentComponent},
    { path:'view-incidents',component:ViewIncidentsComponent},
    { path: 'incident-details/:id', component: IncidentDetailsComponent },
    { path: 'view-my-reported-incidents', component: ViewMyReportedIncidentsComponent },
];
