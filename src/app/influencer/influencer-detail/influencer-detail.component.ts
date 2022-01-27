import { Component, OnInit } from '@angular/core';
import { Influencer } from '../influencer';
import { InfluencerService } from '../influencer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

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
  };
  influencer$: Subscription = new Subscription();

  constructor(private influencerService:InfluencerService, private route: ActivatedRoute,  private router: Router) { }

  ngOnInit(): void {
    const influencerId = this.route.snapshot.paramMap.get('id');

    // debug
    // console.log("influencerID = " + influencerId)

    if (influencerId != null) {
      this.influencer$ = this.influencerService.getInfluencerById(+influencerId).subscribe(result => this.influencer = result);

      // debug
      // console.log(this.influencer)
    }
  }

  naarOverzicht(): void{
    this.router.navigate(['/influencers']);
  }
}
