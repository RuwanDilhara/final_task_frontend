import { Routes } from '@angular/router';
import { EmployeeManagementComponent } from './pages/employee-management/employee-management.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},

    {
        path: 'home',
        component: UserDashboardComponent
    },
    {
        path :'login',
        component: LoginComponent
    }
];
