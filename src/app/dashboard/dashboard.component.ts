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


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  //declaring the variables
  locations$: Observable<Location[]> = new Observable<Location[]>();
  lengthLocations$: number=0;

  socialMediaPlatforms$: Observable<SocialMediaPlatform[]> = new Observable<SocialMediaPlatform[]>();
  lengthSocialMediaPlatforms$: number=0;

  domains$: Observable<Domain[]> = new Observable<Domain[]>();
  lengthDomains$: number=0;

  //retrieving the variables from the service
  constructor(private locationservice:LocationService,
    private socialmediaplatformservice:SocialMediaPlatformService,
    private domainService:DomainService,
    private route :ActivatedRoute) { }
  ngOnInit(): void {
      //location
      this.locations$ = this.locationservice.getLocations();
      this.locations$.subscribe(locations => {this.lengthLocations$ = locations.length});
      this.socialMediaPlatforms$ = this.socialmediaplatformservice.getSocialMediaPlatforms();
      this.socialMediaPlatforms$.subscribe(socialMediaPlatforms => {this.lengthSocialMediaPlatforms$ = socialMediaPlatforms.length});
      this.domains$ = this.domainService.getDomains();
      this.domains$.subscribe(domains => {this.lengthDomains$ = domains.length});
  }




  // User distribution chart
  public UserDistributionColors: Color[] = [];
  public UserDistributionLabels: string[] = ['Employees','Influencers',];
  public UserDistributionOptions = {maintainAspectRatio: false,responsive: false,cutout: '80%',animation: {duration: 0,},};
  UserDistributiondoughnutData = [{color: '#8dd7cf', label: 'Employees',}, {color: '#993886',label: 'Influencers',},];
  UserDistributionLegend = true;
  public UserDistributionData: ChartData<'doughnut'> = {
    labels: this.UserDistributionLabels,
    datasets: [
      {
        data: [70, 30],
        hoverBackgroundColor: ['#fbe192','#8dd7cf',],
        hoverBorderColor: ['#fbe192','#8dd7cf',],
        backgroundColor: ['#fbe192','#8dd7cf',],
      },
    ],
  };
  public UserDistributionType: ChartType = 'doughnut';


  // Post Statuses chart
  public PostStatusesColors: Color[] = [];
  public PostStatusesLabels: string[] = ['Approved','Pending','Rejected'];
  public PostStatusesOptions = {maintainAspectRatio: false,responsive: false,cutout: '80%',animation: {duration: 0,},};
  PostStatusesBarData = [{color: '#8dd7cf', label: 'Approved',},
                              {color: '#993886',label: 'Pending',},
                              {color: '#ff6961',label: 'Rejected'}];
  public PostStatusesData: ChartData<'bar'> = {
    labels: this.PostStatusesLabels,
    datasets: [
      {
        data: [40, 30, 10],
        hoverBackgroundColor: ['#fbe192','#8dd7cf', '#ff6961'],
        hoverBorderColor: ['#fbe192','#8dd7cf', '#ff6961'],
        backgroundColor: ['#fbe192','#8dd7cf', '#ff6961'],
      },
    ],
  };
  public PostStatusesType: ChartType = 'bar';
}
