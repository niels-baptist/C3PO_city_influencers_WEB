import { EmployeeService } from './employee.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Employee } from './employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  employees$: Subscription = new Subscription();
  deleteEmployee$: Subscription = new Subscription();
  errorMessage: string = '';
  p: number=1;

  constructor(private employeeService: EmployeeService, private router :Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employees$ = this.employeeService.getEmployees().subscribe(result => this.employees = result);
  }

  add() {
    this.router.navigate(['newemployee']);
  }

  edit(employeeId: number) {
    this.router.navigate(['editemployees/' + employeeId]);
  }

  delete(employeeId: number) {
    this.deleteEmployee$ = this.employeeService.deleteEmployee(employeeId).subscribe(result => {
      this.getEmployees();
    }, error => {
      this.errorMessage = error.message;
    });
  }
}
