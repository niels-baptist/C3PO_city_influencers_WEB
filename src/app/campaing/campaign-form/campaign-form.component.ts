import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Campaign} from '../campaign';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {CampaignService} from '../campaign.service';


@Component({
  selector: 'app-campaign-form',
  templateUrl: './campaign-form.component.html',
  styleUrls: ['./campaign-form.component.scss']
})
export class CampaignFormComponent implements OnInit, OnDestroy {
  isAdd: boolean = false;
  isEdit: boolean = false;
  campaignId: number = 0;

  isSubmitted: boolean = false;
  errorMessage: string = '';
  nameChangeMessage: string = '';

  campaign$: Subscription = new Subscription();
  postCampaign$: Subscription = new Subscription();
  putCampaign$: Subscription = new Subscription();

  // reactive form
  campaignForm = new FormGroup({
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

  constructor(private router: Router, private campaignService: CampaignService) {

    this.isAdd = this.router.getCurrentNavigation()?.extras.state?.mode === 'add';
    this.isEdit = this.router.getCurrentNavigation()?.extras.state?.mode === 'edit';
    this.campaignId = +this.router.getCurrentNavigation()?.extras.state?.id;

    if (this.campaignId != null && this.campaignId > 0) {
      this.campaign$ = this.campaignService.getCampaignById(this.campaignId).subscribe(result => {
        this.campaignForm.setValue({
          name: result.name,
          description: result.description,
          fotoUrl: result.fotoUrl,
          startDate: result.startDate,
          endDate: result.endDate,
          location: result.location,
          campaignStatus: result.campaignStatus,
          domains: result.domains,
          platforms: result.platforms,
        });
      });
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.campaign$.unsubscribe();
    this.postCampaign$.unsubscribe();
    this.putCampaign$.unsubscribe();
  }

  onSubmit(): void {
    this.isSubmitted = true;
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
      this.putCampaign$ = this.campaignService.putCampaign(this.campaignId, this.campaignForm.value).subscribe(result => {
                //all went well
                this.router.navigateByUrl("/campagnes");
              },
              error => {
                this.errorMessage = error.message;
              });
    }
  }

}
