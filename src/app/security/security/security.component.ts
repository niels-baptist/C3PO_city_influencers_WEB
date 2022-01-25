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
  user: User = {
    userId: 0,
    location: {},
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    username: '',
    birthdate: ''
  };

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

  onSubmit(): void {

    //debug
    //console.log("voor isLogin:" + this.user.username + " - " + this.user.password);

this.isSubmitted = true;

//debug
// alert("voor isLogin:" + this.user.username + " - " + this.user.password);

if (this.isLogin) {
  this.authService.authenticate(this.user.username, this.user.password)
  .subscribe(result => {this.errorMessage = '';

    //debug
    // alert("voor if (result == true):" + this.user.username + " - " + this.user.password);

    if (result == true){
      // save access token localstorage
      localStorage.setItem('userName', this.user.username);
      localStorage.setItem('password', this.user.password);

      //debug
      // alert("na localStorage.setItem():" + this.user.username + " - " + this.user.password);

      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Email/password not correct!';
      this.isSubmitted = false;
    }
  }
  , error => {
    this.errorMessage = 'Email/password not correct!';
    this.isSubmitted = false;
    alert("Error tijdens submit")
    this.router.navigate(['']);
  }
  );
} else {
  alert('work in progress');
}
}
}
