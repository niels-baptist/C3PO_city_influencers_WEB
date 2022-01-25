import { LocationService } from './../location/location.service';
import { Component, OnInit } from '@angular/core';
import { UserPersonalService } from './user-personal.service';
import { UserPersonal } from './user-personal';
import { Location } from '../location/location';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, CanActivateChild } from '@angular/router';

@Component({
  templateUrl: './user-personal.component.html',
  styleUrls: ['./user-personal.component.scss']
})
export class UserPersonalComponent implements OnInit {
   //declaring the variables
   personalUsers$: Observable<UserPersonal[]> = new Observable<UserPersonal[]>();
   lengthPersonalUsers$: number=0;
   //retrieving the variables from the service
   constructor(private userPersonalService:UserPersonalService,
    private locationService:LocationService,
    private route :ActivatedRoute) { }
  ngOnInit(): void {
      //location
      this.personalUsers$ = this.userPersonalService.getPersonalUsers();
      this.personalUsers$.subscribe(personalUsers => {this.lengthPersonalUsers$ = personalUsers.length});
  }
}
