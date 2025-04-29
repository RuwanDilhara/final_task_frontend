import { Component } from '@angular/core';
import { SideBarComponent } from "../../components/side-bar/side-bar.component";

@Component({
  selector: 'app-user-dashboard',
  imports: [SideBarComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {

}
