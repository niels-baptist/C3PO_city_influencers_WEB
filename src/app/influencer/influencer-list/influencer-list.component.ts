import { EmployeeService } from './../../employee/employee.service';
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
  id: number=0;
  locationId: number=0;

  influencers: Influencer[] = [];
  influencers$: Subscription = new Subscription();

  influencersCard$: Observable<Influencer[]> = new Observable<Influencer[]>();

  search : String ="";
  searchBox: any;

  content: Influencer[] = [];

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



  constructor(private influencerService: InfluencerService, private router: Router, private EmployeeService:EmployeeService) { }

  ngOnInit(): void {
    this.getInfluencersByLocation();
    this.influencersCard$ = this.influencerService.getInfluencerByLocation(this.locationId);
  }

  detail(id: number) {
    this.router.navigate(['/influencers', id]);
  }


  getInfluencers() {
    this.influencers$ = this.influencerService.getInfluencers().subscribe(result => this.influencers = result);
  }

  getInfluencersByLocation() {
    this.id=parseInt(localStorage.getItem('employeeId') as string);
    this.EmployeeService.getEmployee(this.id).subscribe(employee => {
      this.locationId = employee.user.location.locationId;
      this.influencerService.getInfluencerByLocation(this.locationId).subscribe(result => this.influencers = result);
      localStorage.setItem('locationId', this.locationId.toString());
    }, error => {
      console.log(error);
    });
  }

  searchInfluencerByName(influencerName: string)  {

    influencerName.toLowerCase();
    // debug
    console.log(influencerName);

    this.influencers$ = this.influencerService.getInfluencerByName(influencerName).subscribe(result => this.influencers = result);
  }

  searchInfluencerByGender(gender: string)  {

  }


//   newArray: any
  searchThis(data: any) {

//     //this.influencers$ = this.influencerService.getInfluencerByUsername(data).subscribe(result => this.influencers = result);

//     this.content = this.newArray
//     // console.log(data)

//     console.log("voor if")
//     if (data) {
//       console.log("in if")
//       this.content = this.content.filter(function (ele, i, array) {
//         let arrayelement = ele.user.firstname.toLowerCase();
//         return arrayelement.includes(data);

//       // var Influencer = this.influencerService.getInfluencerByUsername(data);
//       // return this.Influencer
//       // })
//     }

//     else {
//       console.log("in else")
//       console.log(this.content)
//       console.log(data)
//     }
//     console.log(this.content)
//     // console.log(data)
//     console.log("na if-else")
//   }
}

  // onSubmit(): void{
  //   if (this.isSearchName){
  //       // this.searchInfluencerByName(this.searchByNameForm.influencer)

  //   } else if (this.isSearchGender){

  //   } else if (this.isSearchdomain){

  //   }
  // }
}
