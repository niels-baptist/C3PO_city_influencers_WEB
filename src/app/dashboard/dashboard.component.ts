import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { ChartType, ChartData, Color } from 'chart.js';
import { Title } from '@angular/platform-browser';

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
        data: [40, 30, 10],
        hoverBackgroundColor: ['#fbe192','#8dd7cf', '#ff6961'],
        hoverBorderColor: ['#fbe192','#8dd7cf', '#ff6961'],
        backgroundColor: ['#fbe192','#8dd7cf', '#ff6961'],
      },
    ],
  };
  public CampaignsType: ChartType = 'line';


  constructor() { }
  ngOnInit(): void {
  }
}
