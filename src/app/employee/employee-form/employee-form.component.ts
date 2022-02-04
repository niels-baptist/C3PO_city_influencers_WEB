import { User } from './../../admin/user/user';
import { EmployeeRolesService } from '../../employee-role/employee-roles.service';
import { EmployeeRole } from '../../employee-role/emplyee-role';
import { LocationService } from './../../location/location.service';
import { Location } from './../../location/location';
import { EmployeeService } from './../employee.service';
import { DatePipe } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Employee } from "../employee";

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit, OnDestroy {
  employeeId: number=0;
  isAdd: boolean = false;
  isEdit: boolean = false;
  isSubmitted: boolean = false;
  errorMessage: string = '';

  postEmployee: Subscription = new Subscription();
  putEmployee: Subscription = new Subscription();
  Employees: Employee[] = [];
  Employees$: Subscription = new Subscription();
  locations: Location[] = [];
  locations$: Subscription = new Subscription();
  employeeRoles: EmployeeRole[] = [];
  EmployeeRoles$: Subscription = new Subscription();

  // reactive form
  employeeForm = new FormGroup(
    {
      employeeId: new FormControl(''),
      locationId: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      birthdate: new FormControl(''),
      userName: new FormControl(''),
      // locationName: new FormControl(''),
      roleId: new FormControl(''),
      // employeeRoleName: new FormControl(''),
    }
  );

  constructor(private router: Router, public datePipe: DatePipe,
    private route: ActivatedRoute,
    private EmployeeService: EmployeeService, private LocationService: LocationService, private EmployeeRolesService : EmployeeRolesService) {
      this.isAdd = this.router.url === '/newemployee';
      this.isEdit = !this.isAdd;
    }



  ngOnInit(): void {
    // get article if in edit
    if (this.isEdit) {
      const employeeId = this.route.snapshot.paramMap.get('id');
      if (employeeId != null) {
        this.employeeId = +employeeId;
        this.EmployeeService.getEmployee(this.employeeId).subscribe(result => {
          this.employeeForm.patchValue({
            employeeId: result.employeeId,
            locationId: result.user.location.locationId,
            roleId: result.employee_role.roleId,
            // locationName: result.user.location.name,
            email: result.user.email,
            password: result.user.password,
            firstname: result.user.firstname,
            lastname: result.user.lastname,
            userName: result.user.userName,
            birthdate: this.datePipe.transform(result.user.birthdate, 'YYYY-MM-dd'),
            // employeeRole: result.employee_role
            // employeeRoleName: result.employee_role.name
          });
        });
      }
      else{
        console.log("error, employeeID" + employeeId);
      }
    }
     // get locations
     this.locations$ = this.LocationService.getLocations().subscribe(result => {
      this.locations = result;
    });

    // get employee roles
    this.EmployeeRoles$ = this.EmployeeRolesService.getEmployeeRoles().subscribe(result => {
      this.employeeRoles = result;
    });
  }


  ngOnDestroy(): void {
    this.Employees$.unsubscribe();
    this.locations$.unsubscribe();
  }

  onSubmit(): void {
    this.isSubmitted = true;
    this.submitData();
  }

  submitData(): void {
    if (this.isAdd) {
      //Add
      this.postEmployee = this.EmployeeService.postEmployee(this.employeeForm.value).subscribe(result => {
          this.router.navigateByUrl('/employees');
        },
          error => {
          this.isSubmitted = false;
          this.errorMessage = error.message;
        });
    }
    else {
      //edit
      this.putEmployee = this.EmployeeService.putEmployee(this.employeeForm.value).subscribe(result => {
          this.router.navigateByUrl('/employees');
        },
        error => {
          this.isSubmitted = false;
          this.errorMessage = error.message;
        });
    }
  }


}
