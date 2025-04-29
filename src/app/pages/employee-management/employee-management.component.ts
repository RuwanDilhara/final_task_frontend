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

  employeeData: Employee[] = [];

  constructor(private service: EmployeeService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.service.getEmployees().subscribe((data: Employee[]) => {
      this.employeeData = data;
    });
  }

  sortTable() {
    this.employeeData.sort((a, b) => {
      const fieldA = a[this.sortField as keyof Employee];
      const fieldB = b[this.sortField as keyof Employee];

      if (fieldA! < fieldB!) return this.sortDirection === 'asc' ? -1 : 1;
      if (fieldA! > fieldB!) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  toggleSortDirection() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.sortTable();
  }

  openEditModal(item: Employee) {
    this.selectedItem = { ...item };
    this.showEditModal = true;
  }

  closeEditModal() {
    this.selectedItem = null;
    this.showEditModal = false;
  }

  saveChanges() {
    if (this.selectedItem.id) {
      this.service.updateEmployee(this.selectedItem).subscribe(() => {
        this.loadData();
        this.closeEditModal();
      });
    } else {
      this.selectedItem.createdAt = new Date().toISOString();
      this.selectedItem.updatedAt = new Date().toISOString();
      this.service.saveEmployee(this.selectedItem).subscribe(() => {
        this.loadData();
        this.closeEditModal();
      });
    }
  }

  addNewEmployee() {
    this.selectedItem = {
      id: null,
      name: '',
      email: '',
      department: 'HR',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    this.showEditModal = true;
  }

  openDeleteModal(id: number) {
    this.selectedId = id;
    this.showDeleteModal = true;
  }

  closeDeleteModal() {
    this.showDeleteModal = false;
    this.selectedId = null;
  }

  confirmDelete() {
    if (this.selectedId !== null) {
      this.service.deleteEmployee(this.selectedId).subscribe(() => {
        this.loadData();
        this.closeDeleteModal();
      });
    }
  }
}
