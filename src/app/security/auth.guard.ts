import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(
          route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): boolean | UrlTree {
            return this.checkRoute();
  }

  canActivateChild(
          childRoute: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): boolean | UrlTree {
            return this.checkRoute();
  }


  checkRoute(): boolean | UrlTree {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      return this.router.parseUrl('/login');
    }
  }

}
