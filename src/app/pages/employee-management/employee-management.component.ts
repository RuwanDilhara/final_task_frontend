import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-employee-management',
  imports: [CommonModule,FormsModule],
  templateUrl: './employee-management.component.html',
  styleUrl: './employee-management.component.css'
})
export class EmployeeManagementComponent {
  tableData: Array<{ id: number; name: string; email: string; department: string; createdAt: string; updatedAt: string }> = [
    { id: 1, name: 'John Doe', email: 'ads',department: 'HR', createdAt: '2023-01-01', updatedAt: '2023-01-02' },
  ];
  enableSorting: boolean = true;
  sortDirection: 'asc' | 'desc' = 'asc';
  sortField: string = 'name';
  onEdit(item:any){

  }
  onDelete(item:any){}

  toggleSortDirection(){

  }
  sortTable(){}
}
