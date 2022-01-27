import { Component, OnInit } from '@angular/core';
import { Influencer } from '../influencer';
import { InfluencerService } from '../influencer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-influencer-detail',
  templateUrl: './influencer-detail.component.html',
  styleUrls: ['./influencer-detail.component.scss']
})
export class InfluencerDetailComponent implements OnInit {

  influencer: Influencer = {
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

  constructor(private influencerService:InfluencerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const influencerId = this.route.snapshot.paramMap.get('influencerId');
    if (influencerId != null) {
      let influencerTemp = this.influencerService.getInfluencerById(+influencerId) ?? null;
      if(influencerTemp != null) {
        // this.influencer = influencerTemp;
      }
    }
  }
}
