import { Component } from '@angular/core';
import { UserNavbarComponent } from '../user-components/user-navbar/user-navbar.component';

@Component({
  selector: 'app-accident-report',
  standalone: true,
  imports: [UserNavbarComponent],
  templateUrl: './accident-report.component.html',
  styleUrl: './accident-report.component.css'
})
export class AccidentReportComponent {

}
