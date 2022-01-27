import { User } from './../admin/user/user';
import { LocationService } from './../location/location.service';
import { Component, OnInit } from '@angular/core';
import { UserPersonalService } from './user-personal.service';
import { UserPersonal } from './user-personal';
import { Location } from '../location/location';
import {Router} from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, CanActivateChild } from '@angular/router';

@Component({
  templateUrl: './user-personal.component.html',
  styleUrls: ['./user-personal.component.scss']
})
export class UserPersonalComponent implements OnInit {
   //declaring the variables
  //  personalUsers$: Observable<UserPersonal[]> = new Observable<UserPersonal[]>();
  //  lengthPersonalUsers$: number=0;
   personalUsers: UserPersonal[] = [];
   personalUsers$: Subscription = new Subscription();
   deleteUser$: Subscription = new Subscription();
   errorMessage: string = '';

   //retrieving the variables from the service
   constructor(private userPersonalService:UserPersonalService,private router :Router) { }

    ngOnInit(): void {
        this.getUsers();
        
    }

    ngOnDestroy(): void {
      this.personalUsers$.unsubscribe();
      this.deleteUser$.unsubscribe();
    }

    add() {
      this.router.navigate(['newpersonaluser']);
    }

    edit(user_id: number) {
      this.router.navigate(['editpersonaluser/' + user_id]);
    }

    delete(user_id: number) {
      this.deleteUser$ = this.userPersonalService.deleteUser(user_id).subscribe(result => {
        this.getUsers();
      }, error => {
        this.errorMessage = error.message;
      });
    }

    getUsers() {
      this.personalUsers$ = this.userPersonalService.getPersonalUsers().subscribe(result => this.personalUsers = result);
    }
}
