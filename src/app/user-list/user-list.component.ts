import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {User} from '../user'
import { UserService } from '../user.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() user: User = {
    GebruikerId: 0,
    LocatieId: 0,
    email: '',
    Password: '',
    Voornaam: '',
    Naam: '',
    Geboortedatum: ''
  };

  users$: Observable<User[]> = new Observable<User[]>();

  constructor(private userSrevice: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    console.log(this.route.snapshot.paramMap.get('test'));

    this.users$ = this.userSrevice.getUsers();
  }

}
