import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { SideBarComponent } from "./components/side-bar/side-bar.component";
import { UserDashboardComponent } from "./pages/user-dashboard/user-dashboard.component";
import { LoginComponent } from "./pages/login/login.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideBarComponent, UserDashboardComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'final_task_frontend';

  ngOnInit(): void {
    initFlowbite();
  }
 
}
