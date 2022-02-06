import { LocationService } from './../../location/location.service';
import { SocialMediaPlatformService } from './../../social-media-platform/social-media-platform.service';
import { PlatformService } from './../../shared/platform.service';
import { DomainService } from './../../domain/domain.service';
import { Domain } from './../../domain/domain';
import { Location } from './../../location/location';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {Campaign} from '../campaign';
import {CampaignService} from '../campaign.service';
import { SocialMediaPlatform } from 'src/app/social-media-platform/social-media-platform';
// import { setUncaughtExceptionCaptureCallback } from 'process';

@Component({
  selector: 'app-campagne-list',
  templateUrl: './campagne-list.component.html',
  styleUrls: ['./campagne-list.component.scss'],
  template : `
  <ul>
    <li *ngFor="let item of collection | paginate: { itemsPerPage: 10, currentPage: p }"> ... </li>
  </ul>
  <pagination-controls (pageChange)="p = $event"></pagination-controls>
  `
})
export class CampagneListComponent implements OnInit, OnDestroy {

  campaigns: Campaign[] = [];
  campaigns$: Subscription = new Subscription();
  domains: Domain[] = [];
  domains$: Subscription = new Subscription();
  platformsList: SocialMediaPlatform[] = [];
  platformsList$: Subscription = new Subscription();
  LocationsList: Location[] = [];
  LocationsList$: Subscription = new Subscription();
  deleteCampaign$: Subscription = new Subscription();
  errorMessage: string = '';
  p: number=1;

  constructor(private campaignService: CampaignService, private router: Router, private SocialMediaPlatformService: SocialMediaPlatformService, private DomainService:DomainService, private LocationService:LocationService  ) { }


  ngOnInit(): void {
    this.getCampaigns();
    console.log("alle campagnes: " + this.campaigns.length)
  }

  ngOnDestroy(): void {
    this.campaigns$.unsubscribe();
    this.deleteCampaign$.unsubscribe();
  }

  add() {
    //Navigate to form in add mode
    this.router.navigate(['newcampaign']);
  }

  edit(id: number) {
    //Navigate to form in edit mode
    this.router.navigate(['editcampaign/' + id]);
  }

  delete(id: number) {
    this.deleteCampaign$ = this.campaignService.deleteCampaign(id).subscribe(result => {
      //all went well
      this.getCampaigns();
    }, error => {
      //error
      this.errorMessage = error.message;
    });
  }

  getCampaigns() {
    this.campaigns$ = this.campaignService.getCampaigns().subscribe(result => this.campaigns = result);
    console.log("campaign content" + this.campaigns)
  }

  getDomains() {
    this.domains$ = this.DomainService.getDomains().subscribe(result => this.domains = result);
  }

  getPlatforms() {
    this.platformsList$ = this.SocialMediaPlatformService.getSocialMediaPlatforms().subscribe(result => this.platformsList = result);
  }

  getLocations() {
    this.LocationsList$ = this.LocationService.getLocations().subscribe(result => this.LocationsList = result);
  }
}
