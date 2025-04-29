import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "../app/model/Employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService{
    baseUrl = 'http://localhost:8080/api/v1/employees';
    constructor(private http:HttpClient) { }

    getEmployees():Observable<Employee[]> {
        return this.http.get<Employee[]>(`${this.baseUrl}/getAll`);
    }
    saveEmployee(employee:Employee):Observable<Employee> {
        return this.http.post<Employee>(`${this.baseUrl}/save`, employee);
    }
    updateEmployeer(employee:Employee):Observable<Employee> {
        return this.http.post<Employee>(`${this.baseUrl}/update`, employee);
    }
    
}