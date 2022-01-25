import { HttpClient } from '@angular/common/http';
import { LocationService } from '../location/location.service';
import { Location } from './../location/location';
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


  // campaigns chart
  public CampaignsColors: Color[] = [];
  public CampaignsLabels: string[] = ['Campaign 1','Campaign 2','Campaign 3','Campaign 4','Campaign 5','Campaign 6','Campaign 7','Campaign 8','Campaign 9','Campaign 10'];
  public CampaignsOptions = {maintainAspectRatio: false,responsive: false,cutout: '80%',animation: {duration: 0,},};
  CampaignsLineData = [{color: '#8dd7cf', label: 'Approved',},
                              {color: '#993886',label: 'Pending',},
                              {color: '#ff6961',label: 'Rejected'}];
  public CampaignsData: ChartData<'bar'> = {
    labels: this.CampaignsLabels,
    datasets: [
      {
        data: [12, 14, 8, 10, 10, 10, 10, 10, 10, 8, 8],
        hoverBackgroundColor: ['#fbe192','#8dd7cf', '#ff6961'],
        hoverBorderColor: ['#fbe192','#8dd7cf', '#ff6961'],
        backgroundColor: ['#fbe192','#8dd7cf', '#ff6961'],
      },
    ],
  };
  public CampaignsType: ChartType = 'line';



  locations$: Observable<Location[]> = new Observable<Location[]>();
  lengthLocations$: number=0;
  constructor(private locationservice:LocationService, private route :ActivatedRoute) { }
  ngOnInit(): void {
    this.locations$ = this.locationservice.getLocations();
    this.locations$.subscribe(locations => {
      this.lengthLocations$ = locations.length;
      console.log(this.lengthLocations$);
    });
  }
   // Locations chart
   public LocationsColors: Color[] = [];
   public LocationsLabels: string[] = ['Locations'];
   public LocationsOptions = {maintainAspectRatio: false,responsive: false,cutout: '80%',animation: {duration: 0,},};
   LocationsdoughnutData = [{color: '#8dd7cf', label: 'locations',},];
   LocationsLegend = true;
   public LocationsData: ChartData<'doughnut'> = {
     labels: this.LocationsLabels,
     datasets: [
       {
         data: [this.lengthLocations$],
         hoverBackgroundColor: ['#fbe192'],
         hoverBorderColor: ['#fbe192'],
         backgroundColor: ['#fbe192'],
       },
     ],
   };
   public LocationsType: ChartType = 'doughnut';
  public showHide(){
  }
}
