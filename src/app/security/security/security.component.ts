import { Component, OnInit } from '@angular/core';
import {User} from '../../admin/user/user';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {
  // user: User = {
  //   userId: 0,
  //   location: 0,
  //   email: '',
  //   password: '',
  //   firstname: '',
  //   lastname: '',
  //   username: '',
  //   birthdate: ''
  // };

  isSubmitted: boolean = false;
  errorMessage: string = '';

  isLogin: boolean = false;
  isRegister: boolean = false;
  isLogout: boolean = false;

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    switch (this.router.url) {
      case '/login': {
        this.isLogin = true;
        break;
      }
      case '/logout': {
        this.isLogout = true;
        this.authService.deleteToken();
        this.router.navigate(['']);
        break;
      }
      // case '/register': {
      //   this.isRegister = true;
      //   break;
      // }
      default: {
        this.isLogin = true;
        break;
      }
    }
  }

  // onSubmit(): void {
  //   this.isSubmitted = true;

  //   if (this.isLogin) {
  //     this.authService.authenticate(this.user.username, this.user.password).subscribe(result => {
  //       this.errorMessage = '';
  //       // save access token localstorage
  //       localStorage.setItem('userId', result.user.userId.toString());
  //       localStorage.setItem('email', result.user.email);
  //       this.router.navigate(['']);
  //     }, error => {
  //       this.errorMessage = 'Email/password not correct!';
  //       this.isSubmitted = false;
  //     });
  //   } else {
  //     alert('work in progress');
  //   }
  // }
}
