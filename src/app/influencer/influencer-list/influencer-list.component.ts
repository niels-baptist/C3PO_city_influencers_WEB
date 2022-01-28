import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {Influencer} from '../influencer'
import {InfluencerService} from '../influencer.service';
import {Domain} from '../../domain/domain'
import { FormControl, FormGroup } from '@angular/forms';

import { InfluencerCardComponent } from '../influencer-card/influencer-card.component';

@Component({
  selector: 'app-influencer-list',
  templateUrl: './influencer-list.component.html',
  styleUrls: ['./influencer-list.component.scss']
})
export class InfluencerListComponent implements OnInit{

  isSearchName: boolean = true;
  isSearchGender: boolean = false;
  isSearchdomain: boolean = false;

  influencers: Influencer[] = [];
  influencers$: Subscription = new Subscription();

  influencersCard$: Observable<Influencer[]> = new Observable<Influencer[]>();

  search : String ="";
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

    // reactive form
    searchByNameForm = new FormGroup({
      influencerName: new FormControl('')
    });

  constructor(private influencerService: InfluencerService, private router: Router) { }

  ngOnInit(): void {
    this.getInfluencers();

    this.influencersCard$ = this.influencerService.getInfluencers();

  }

  detail(id: number) {
    this.router.navigate(['/influencers', id]);
  }


  getInfluencers() {
    this.influencers$ = this.influencerService.getInfluencers().subscribe(result => this.influencers = result);
  }

  searchInfluencerByName(influencerName: string)  {

    influencerName.toLowerCase();
    // debug
    console.log(influencerName);

    this.influencers$ = this.influencerService.getInfluencerByName(influencerName).subscribe(result => this.influencers = result);
  }

  searchInfluencerByGender(gender: string)  {

  }

  @Output() searchcriteria = new EventEmitter<String>();

  searchThis(){
    this.searchcriteria.emit(this.searchBox)
  }

  // onSubmit(): void{
  //   if (this.isSearchName){
  //       // this.searchInfluencerByName(this.searchByNameForm.influencer)

  //   } else if (this.isSearchGender){

  //   } else if (this.isSearchdomain){

  //   }
  // }
}
