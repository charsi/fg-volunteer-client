import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor (private auth: AuthService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.isAuthenticated()){
      return true;
    } else {
      this.auth.forceLogout();
      return false;
    }
  }
}
