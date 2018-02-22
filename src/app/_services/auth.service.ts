import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { HttpRequest, HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AlertService } from '../_services/alert.service';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  private apiHost:string;
  public token: string;
  constructor(private http: HttpClient, private router: Router, private alertService: AlertService) {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.id;
    this.apiHost = environment.API_URL;
   }

   public getCurrentUserId(){
     if (localStorage.getItem('currentUser')){
      return JSON.parse(localStorage.getItem('currentUser')).id;
     } else return "";
   }

   public getCurrentUserName(){
    if (localStorage.getItem('currentUser')){
     return JSON.parse(localStorage.getItem('currentUser')).username;
    } else return "";
  }

   public login(username:string, password:string){
    return this.http.post<any>(this.apiHost+'/users/login', {username:username, password:password})
    .map((res) => {
      // login successful if there's a jwt token in the response
      if (res && res.id) {
        //console.log(res);
        let token = res.id;
        let id = res.userId;
        let firstName = res.firstName;
        this.token = token;
        // store username and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token, id:id }));
        // return true to indicate successful login
        return true;
      } else {
        // return false to indicate failed login
        //his.forceLogout();
        return false;
      }
    })
    .catch((err) => {
      this.handleError(err);
      return Observable.throw(err);
    });
    
  }

  public logout() {
    return this.http.post<any>(this.apiHost+'/users/logout', {})
    .map(() => {
      localStorage.removeItem('currentUser');
      this.router.navigate(['/']);
      this.alertService.warning('You have been logged out.', true);
    })
    .catch((err) => {
      this.handleError(err);
      return Observable.throw(err);
    });
  }

  public forceLogout(){
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }

  public getToken(): string {
    let token = '';
    if (localStorage.getItem('currentUser')){
      token = JSON.parse(localStorage.getItem('currentUser')).token;
    }
    //console.log(token);
    return token? token : '';
  }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    if (token){
      return true;
    } else {
      return false;
    }
  }

  public handleError (error: Response | any) {
    let errMsg: string;
    console.log(error);
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    if(error.status == 401){
      console.log('logging out');
      this.forceLogout();
    }
    console.log(errMsg);
    this.alertService.error("Error : "+error.status, true);
  }


}