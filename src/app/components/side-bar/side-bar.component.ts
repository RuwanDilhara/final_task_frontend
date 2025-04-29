import { Component } from '@angular/core';
import { EmployeeManagementComponent } from "../../pages/employee-management/employee-management.component";

@Component({
  selector: 'app-side-bar',
  imports: [EmployeeManagementComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

}
