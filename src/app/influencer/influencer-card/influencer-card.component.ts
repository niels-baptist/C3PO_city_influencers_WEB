import { Component,Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Influencer } from '../influencer';
import { InfluencerService } from '../influencer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';





@Component({
  selector: 'app-influencer-card',
  templateUrl: './influencer-card.component.html',
  styleUrls: ['./influencer-card.component.scss']
})
export class InfluencerCardComponent implements OnInit {

  influencers: Influencer[] = [];
  influencers$: Subscription = new Subscription();

  searchBox: any;

  @Input() influencer: Influencer = {
    influencerId: 0,
    user: {
      userId: 0,
      location: {
        locationId: 0,
        name: '',
        postalCode: ''
      },
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      userName: '',
      birthdate: ''
    },
    gender: '',
    domains: [
      {
        domainId: 0,
        name: '',
        description: ''
    },
    ]
  }
  constructor(private influencerService: InfluencerService, private router: Router) { }

  ngOnInit(): void {
    this.getInfluencers();
  }

  getInfluencers() {
    this.influencers$ = this.influencerService.getInfluencers().subscribe(result => this.influencers = result);
  }

  detail(id: number) {
    this.router.navigate(['/influencers', id]);
  }



@Output() searchcriteria = new EventEmitter<String>();
searchThis() {
    this.searchcriteria.emit(this.searchBox)
}

}
