import { EmployeeRole } from './emplyee-role';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRolesService {
  azure: string =  'https://c3poapi.azurewebsites.net/';

  constructor(private httpClient: HttpClient) { }
  getEmployeeRoles(): Observable<EmployeeRole[]> {
    return this.httpClient.get<EmployeeRole[]>(this.azure + 'employeeRoles');
  }
}
