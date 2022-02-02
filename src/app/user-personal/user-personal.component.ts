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
  styleUrls: ['./user-personal.component.scss'],
  template: `
    <ul>
      <li *ngFor="let item of collection | paginate: { itemsPerPage: 10, currentPage: p }"> ... </li>
    </ul>

    <pagination-controls (pageChange)="p = $event"></pagination-controls>
    `
})
export class UserPersonalComponent implements OnInit {
   personalUsers: UserPersonal[] = [];
   personalUsers$: Subscription = new Subscription();
   deleteUser$: Subscription = new Subscription();
   errorMessage: string = '';
   p: number=1;

   constructor(private userPersonalService:UserPersonalService,private router :Router) { }

    ngOnInit(): void {
        this.getUsers();
        this.p = 1;

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
