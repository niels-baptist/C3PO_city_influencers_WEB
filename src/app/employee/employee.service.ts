import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  azure: string =  'https://c3poapi.azurewebsites.net/';

  constructor(private httpClient: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.azure + 'employees');
  }

  getEmployeeByLocation(id:number): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.azure + 'employees/location/' + id);
  }

  getEmployee(employeeId:number): Observable<Employee> {
    return this.httpClient.get<Employee>(this.azure + 'employees/' + employeeId);
  }

  getLocations(): Observable<Location[]> {
    return this.httpClient.get<Location[]>(this.azure + 'locations');
  }

  postEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.azure + 'employees/employeeForm', employee);
  }

  putEmployee(employee: Employee): Observable<Employee> {
    console.log(employee.employeeId);
  return this.httpClient.put<Employee>(this.azure + 'employees/employeeForm', employee);
  }

  deleteEmployee(employeeId: number): Observable<Employee> {
    return this.httpClient.delete<Employee>(this.azure + 'employees/' + employeeId);
  }

}
