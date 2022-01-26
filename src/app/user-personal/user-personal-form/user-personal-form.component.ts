import { Location } from './../../location/location';
import { UserPersonal } from './../user-personal';
import { LocationService } from '../../location/location.service';
import { UserService } from '../../admin/user/user.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import { UserPersonalService } from '../user-personal.service';
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

  // reactive form
  personaluserForm = new FormGroup({
    // user_id: new FormControl(''),
    location: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl(''),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    birthDate: new FormControl(''),
    userName: new FormControl(''),
  });

  constructor(private router: Router,
      private route: ActivatedRoute,
      private userPersonalService: UserPersonalService,
      private LocationService: LocationService){
        this.isAdd = this.router.url === '/newpersonaluser';
        this.isEdit = !this.isAdd;
      }

  ngOnInit(): void {
    // get article if in edit
    if (this.isEdit) {
      const user_id = this.route.snapshot.paramMap.get('user_id');
      if (user_id != null) {
        this.user_id = +user_id;
        this.userPersonalService.getUserById(+user_id).subscribe(result => {
          this.personaluserForm.patchValue({
            // user_id: result.userId,
            location: result.location,
            email: result.email,
            password: result.password,
            firstName: result.firstName,
            lastName: result.lastName,
            userName: result.userName,
            birthDate: result.birthdate,
          });
        });
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
          this.router.navigateByUrl('/');
        },
          error => {
          this.isSubmitted = false;
          this.errorMessage = error.message;
        });
    }
    else {
      //edit
      this.postUserPersonal = this.userPersonalService.postUser(this.personaluserForm.value).subscribe(result => {
          this.router.navigateByUrl('/');
        },
        error => {
          this.isSubmitted = false;
          this.errorMessage = error.message;
        });
    }
  }
}
