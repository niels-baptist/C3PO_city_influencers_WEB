import { EmployeeService } from './../../employee/employee.service';
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
  id:number=0;
  locationId: number=0;

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
  constructor(private influencerService: InfluencerService, private router: Router, private EmployeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getInfluencersByLocation();
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

  detail(id: number) {
    this.router.navigate(['/influencers', id]);
  }



@Output() searchcriteria = new EventEmitter<String>();
searchThis() {
    this.searchcriteria.emit(this.searchBox)
}

}
