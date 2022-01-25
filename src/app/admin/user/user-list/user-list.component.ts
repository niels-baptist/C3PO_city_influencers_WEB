// import { Component, Input, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import {User} from '../user'
// import { UserService } from '../user.service';

// import { Location } from '../../../location';

// import { Observable } from 'rxjs';
// import { Location, Location } from '@angular/common';


// @Component({
//   selector: 'app-user-list',
//   templateUrl: './user-list.component.html',
//   styleUrls: ['./user-list.component.scss']
// })
// export class UserListComponent implements OnInit {
//   @Input() user: User = {
//     userId: 0,
//     location: Location = {locationId: 0, name: '', postalCode: ''},
//     email: '',
//     password: '',
//     firstname: '',
//     lastname: '',
//     username: '',
//     birthdate: ''
//   };

//   users$: Observable<User[]> = new Observable<User[]>();

//   constructor(private userSrevice: UserService, private route: ActivatedRoute) { }

//   ngOnInit(): void {

//     console.log(this.route.snapshot.paramMap.get('test'));

//     this.users$ = this.userSrevice.getUsers();
//   }

// }
