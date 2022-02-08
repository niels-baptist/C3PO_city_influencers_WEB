import { EmployeeService } from './../employee/employee.service';
import { DomainService } from './../domain/domain.service';
import { Domain } from './../domain/domain';
import { HttpClient } from '@angular/common/http';
import { LocationService } from '../location/location.service';
import { Location } from './../location/location';
import { SocialMediaPlatform } from './../social-media-platform/social-media-platform';
import { SocialMediaPlatformService } from './../social-media-platform/social-media-platform.service';
import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { ChartType, ChartData, Color } from 'chart.js';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../employee/employee';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  employeeName: string = '';
  employeeLocationName: string = '';
  id:number=0;

  constructor(private EmployeeService:EmployeeService) { }
  ngOnInit(): void {
    //fill id variable with localstorage id
    this.id=parseInt(localStorage.getItem('employeeId') as string);
    this.EmployeeService.getEmployee(this.id).subscribe(employee => {
      this.employeeName = employee.user.firstname + ' ' + employee.user.lastname;
      this.employeeLocationName = employee.user.location.name;
    }, error => {
      console.log(error);
    });
  }
}
