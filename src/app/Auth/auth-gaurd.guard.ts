import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdGuard implements CanActivate {
  logged = false
  constructor(
    private authenticationservice: AuthService,
    private router: Router
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const currentUser = this.authenticationservice.currentUserValue
console.log(currentUser)
    if (currentUser.userName) {
      return true
    }
    else{

    window.alert('You don`t permission on this page');
     this.router.navigate(['auth/login']);
     return false
    }

  }

}
