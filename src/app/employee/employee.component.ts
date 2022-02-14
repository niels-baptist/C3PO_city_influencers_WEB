import { EmployeeService } from './employee.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Employee } from './employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  template : `
  <ul>
    <li *ngFor="let item of collection | paginate: { itemsPerPage: 10, currentPage: e }"> ... </li>
  </ul>
  <pagination-controls (pageChange)="e = $event"></pagination-controls>
  `
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  employees$: Subscription = new Subscription();
  deleteEmployee$: Subscription = new Subscription();
  errorMessage: string = '';
  e: number=1;
  id:number=0;
  locationId: number=0;

  constructor(private employeeService: EmployeeService, private router :Router) { }

  ngOnInit(): void {
    this.getEmployeesByLocation();
  }

  add() {
    this.router.navigate(['newemployee']);
  }

  edit(employeeId: number) {
    this.router.navigate(['editemployees/' + employeeId]);
  }

  delete(employeeId: number) {
    this.deleteEmployee$ = this.employeeService.deleteEmployee(employeeId).subscribe(result => {
      this.getEmployeesByLocation();
    }, error => {
      this.errorMessage = error.message;
    });
  }

  getEmployees() {
    this.employees$ = this.employeeService.getEmployees().subscribe(result => this.employees = result);
  }

  getEmployeesByLocation(){
    this.id=parseInt(localStorage.getItem('employeeId') as string);
    this.employeeService.getEmployee(this.id).subscribe(employee => {
      this.locationId = employee.user.location.locationId;
      this.employeeService.getEmployeeByLocation(this.locationId).subscribe(result => this.employees = result);
      localStorage.setItem('locationId', this.locationId.toString());
    }, error => {
      console.log(error);
    });
  }
}
