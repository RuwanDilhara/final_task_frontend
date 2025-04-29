import { Component } from '@angular/core';
import { EmployeeManagementComponent } from "../../pages/employee-management/employee-management.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  imports: [EmployeeManagementComponent,RouterLink],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

}
