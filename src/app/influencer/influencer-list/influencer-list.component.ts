import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {Influencer} from '../influencer'
import {InfluencerService} from '../influencer.service';
import {Domain} from '../../domain/domain'

@Component({
  selector: 'app-influencer-list',
  templateUrl: './influencer-list.component.html',
  styleUrls: ['./influencer-list.component.scss']
})
export class InfluencerListComponent implements OnInit{

  influencers: Influencer[] = [];
  influencers$: Subscription = new Subscription();

  constructor(private influencerService: InfluencerService, private router: Router) { }

  ngOnInit(): void {
    this.getInfluencers();
  }


  getInfluencers() {
    this.influencers$ = this.influencerService.getInfluencers().subscribe(result => this.influencers = result);
     }
}
