import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {Campaign} from '../campaign';
import {CampaignService} from '../campaign.service';
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
  deleteCampaign$: Subscription = new Subscription();
  errorMessage: string = '';
  p: number=1;

  constructor(private campaignService: CampaignService, private router: Router) { }


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
  }
}
