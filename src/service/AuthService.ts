import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Login } from "../app/model/Login";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class AuthService{
      baseUrl = 'http://localhost:8080/api/v1/staffs';

      constructor(private http:HttpClient) { }
  
      login(employee:Login):Observable<Login> {
          return this.http.get<Login>(`${this.baseUrl}/login`);
      }
      
  }