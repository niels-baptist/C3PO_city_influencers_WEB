import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Campaign} from '../campaign';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {CampaignService} from '../campaign.service';

import { Location } from './../../location/location';
import { LocationService } from '../../location/location.service';
import { DatePipe } from '@angular/common';
import { Domain } from '../../domain/domain';
import { DomainService } from 'src/app/domain/domain.service';

import { Platform } from 'src/app/shared/platform';
import { PlatformService } from 'src/app/shared/platform.service';


@Component({
  selector: 'app-campaign-form',
  templateUrl: './campaign-form.component.html',
  styleUrls: ['./campaign-form.component.scss']
})
export class CampaignFormComponent implements OnInit, OnDestroy {
  campaignId: number = 0;
  isAdd: boolean = false;
  isEdit: boolean = false;
  isSubmitted: boolean = false;
  errorMessage: string = '';

  campaign: Campaign[] = [];
  campaign$: Subscription = new Subscription();
  postCampaign$: Subscription = new Subscription();
  putCampaign$: Subscription = new Subscription();

  locations: Location[] = [];
  locations$: Subscription = new Subscription();
  locationId: number=0;

  domainsList: Domain[] = [];
  domainsList$: Subscription = new Subscription();

  platformsList: Platform[] = [];
  platformsList$: Subscription = new Subscription();

  // platformList: Platform[] = [];
  // platformList$: Subscription = new Subscription();

  // reactive form
  campaignForm = new FormGroup({
    employee: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    fotoUrl: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    location: new FormControl(''),
    campaignStatus: new FormControl(''),
    domains: new FormControl(''),
    platforms: new FormControl(''),
  });

  constructor(private router: Router,
    private campaignService: CampaignService,
    private route: ActivatedRoute,
    public datePipe: DatePipe,
    private LocationService: LocationService,
    private domainService: DomainService,
    private platformService: PlatformService) {

      this.isAdd = this.router.url === '/newcampaign';
      this.isEdit = !this.isAdd;
    }
    // if (this.campaignId != null && this.campaignId > 0) {
    //   this.campaign$ = this.campaignService.getCampaignById(this.campaignId).subscribe(result => {
    //     this.campaignForm.setValue({
    //       name: result.name,
    //       description: result.description,
    //       fotoUrl: result.fotoUrl,
    //       startDate: result.startDate,
    //       endDate: result.endDate,
    //       location: result.location,
    //       campaignStatus: result.campaignStatus,
    //       domains: result.domains,
    //       platforms: result.platforms,
    //     });
    //   });
    // }


  ngOnInit(): void {
    // get campaign if in edit
    if (this.isEdit) {
      const campaignId = this.route.snapshot.paramMap.get('id');
      if (campaignId != null) {
        this.campaignId = +campaignId;
        this.campaignService.getCampaignById(this.campaignId).subscribe(result => {
          this.campaignForm.patchValue({
            campaignId: result.campaignId,

            employee: result.employee,
            name: result.name,
            description: result.description,
            fotoUrl: result.fotoUrl,
            startDate: this.datePipe.transform(result.startDate, 'YYYY-MM-dd'),
            endDate: this.datePipe.transform(result.endDate, 'YYYY-MM-dd'),

            location: result.location,
            locationId: result.location.locationId,

            campaignStatus: result.campaignStatus,
            domains: result.domains,
            platforms: result.platforms,
          });
        });

        console.log()
      }
      else{
        console.log("Error: no campaignId");
      }
    }

    // get locations
    this.locations$ = this.LocationService.getLocations().subscribe(result => {
      this.locations = result;
    });

    // get domains
    this.domainsList$ = this.domainService.getDomains().subscribe(result => {
      this.domainsList = result;
    });

    // get domains
    this.platformsList$ = this.platformService.getPlatforms().subscribe(result => {
      this.platformsList = result;
    });
  }

  ngOnDestroy(): void {
    this.campaign$.unsubscribe();
    this.postCampaign$.unsubscribe();
    this.putCampaign$.unsubscribe();
  }

  onSubmit(): void {
    this.isSubmitted = true;
    this.submitData();
  }

  submitData(): void {
    if (this.isAdd) {
      this.postCampaign$ = this.campaignService.postCampaign(this.campaignForm.value).subscribe(result => {
        //all went well
        this.router.navigateByUrl("/campagnes");
      },
        error => {
        this.errorMessage = error.message;
      });
    }
    if (this.isEdit) {
      this.putCampaign$ = this.campaignService.putCampaign(this.campaignForm.value).subscribe(result => {
        //all went well
        this.router.navigateByUrl("/campagnes");
      },
        error => {
        this.errorMessage = error.message;
      });
    }
  }

}
