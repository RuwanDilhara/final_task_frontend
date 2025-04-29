import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../model/Employee';
import { EmployeeService } from '../../../service/EmployeeService';

@Component({
  selector: 'app-employee-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit {
  sortField: string = 'name';
  sortDirection: 'asc' | 'desc' = 'asc';
  enableSorting: boolean = true;

  showEditModal: boolean = false;
  showDeleteModal: boolean = false;
  selectedItem: any = null;
  selectedId: number | null = null;

  constructor(private service: EmployeeService) { }

  ngOnInit(): void {
    this.loadData();
  }
  employeeData: Employee[] = [];

  loadData() {
    this.service.getEmployees().subscribe((data: Employee[]) => {
      this.employeeData = data;
    })
  }
  sortTable() {
    this.employeeData.sort((a, b) => {
      const fieldA = a[this.sortField as keyof typeof a];
      const fieldB = b[this.sortField as keyof typeof b];

      if (fieldA < fieldB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      }
      if (fieldA > fieldB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }

  toggleSortDirection() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.sortTable();
  }

  openEditModal(item: any) {
    this.selectedItem = { ...item };
    this.showEditModal = true;
  }

  closeEditModal() {
    this.showEditModal = false;
  }

  saveChanges() {
    if (this.selectedItem.id) {
      const index = this.employeeData.findIndex(item => item.id === this.selectedItem.id);
      if (index !== -1) {
        this.employeeData[index] = {
          ...this.selectedItem,
          updatedAt: new Date().toISOString().split('T')[0]
        };
      
      }
    } else {
      this.service.saveEmployee(this.selectedItem).subscribe((data:Employee) => {
        console.log(data);
        
      })
    }
    this.closeEditModal();
  }

  openDeleteModal(id: number) {
    this.selectedId = id;
    this.showDeleteModal = true;
  }

  closeDeleteModal() {
    this.showDeleteModal = false;
  }

  confirmDelete() {
    this.employeeData = this.employeeData.filter(item => item.id !== this.selectedId);
    this.closeDeleteModal();
  }

  addNewEmployee() {
    this.selectedItem = {
      id: null,
      name: '',
      email: '',
      department: 'HR',
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0]
    };
    this.showEditModal = true;
  }
}