import { Location } from './../../location/location';
import { UserPersonal } from './../user-personal';
import { LocationService } from '../../location/location.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import { UserPersonalService } from '../user-personal.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-user-personal-form-component',
  templateUrl: './user-personal-form.component.html',
  styleUrls: ['./user-personal-form.component.scss']
})
export class UserPersonalFormComponentComponent implements OnInit, OnDestroy {
  user_id: number=0;
  isAdd: boolean = false;
  isEdit: boolean = false;
  isSubmitted: boolean = false;
  errorMessage: string = '';

  postUserPersonal: Subscription = new Subscription();
  putUserPersonal: Subscription = new Subscription();
  usersPersonal: UserPersonal[] = [];
  userPersonal$: Subscription = new Subscription();
  locations: Location[] = [];
  locations$: Subscription = new Subscription();
  locationId: number=0;

  // reactive form
  personaluserForm = new FormGroup({
    user_id: new FormControl(''),
    location: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    birthdate: new FormControl(''),
    userName: new FormControl(''),
  });

  constructor(private router: Router, public datePipe: DatePipe,
      private route: ActivatedRoute,
      private userPersonalService: UserPersonalService,
      private LocationService: LocationService){
        this.isAdd = this.router.url === '/newpersonaluser';
        this.isEdit = !this.isAdd;
      }

  ngOnInit(): void {
    // get article if in edit
    if (this.isEdit) {
      const user_id = this.route.snapshot.paramMap.get('id');
      if (user_id != null) {
        this.user_id = +user_id;
        this.userPersonalService.getUserById(this.user_id).subscribe(result => {
          this.personaluserForm.patchValue({
            user_id: result.userId,
            location: result.location,
            locationId: result.location.locationId,
            email: result.email,
            password: result.password,
            firstname: result.firstname,
            lastname: result.lastname,
            userName: result.userName,
            // birthdate: this.datePipe.transform(result.birthdate, 'YYYY-MM-ddT00:00:00.000+00.00'),
            birthdate: this.datePipe.transform(result.birthdate, 'YYYY-MM-dd')
          });
        });
      }
      else{
        console.log("Error: no user_id");
      }
    }
    // get categories
    this.userPersonal$ = this.userPersonalService.getUsers().subscribe(result => {
      this.usersPersonal = result;
    });

    // get locations
    this.locations$ = this.LocationService.getLocations().subscribe(result => {
      this.locations = result;
    }
    );
  }

  ngOnDestroy(): void {
    this.userPersonal$.unsubscribe();
    this.locations$.unsubscribe();
    this.locations$.unsubscribe();
  }

  onSubmit(): void {
    this.isSubmitted = true;
    this.submitData();
  }

  submitData(): void {
    if (this.isAdd) {
      //Add
      this.postUserPersonal = this.userPersonalService.postUser(this.personaluserForm.value).subscribe(result => {
          this.router.navigateByUrl('/PersonalUser');
        },
          error => {
          this.isSubmitted = false;
          this.errorMessage = error.message;
        });
    }
    else {
      //edit
      this.putUserPersonal = this.userPersonalService.putUser(this.personaluserForm.value).subscribe(result => {
          this.router.navigateByUrl('/PersonalUser');
        },
        error => {
          this.isSubmitted = false;
          this.errorMessage = error.message;
        });
    }
  }
}
