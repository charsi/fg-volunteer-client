import { Injectable } from '@angular/core';
import { HttpRequest, HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {
  private apiHost:string;
  public token: string;
  constructor(private http: HttpClient) {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.id;
    this.apiHost = 'https://fgdemoapi.nishil.in/api/v1';
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
        return false;
      }
    })
    .catch(this.handleError);
  }

  public logout() {
    const token = this.getToken();
    return this.http.post<any>(this.apiHost+'/users/logout', {})
    .map(() => {
      localStorage.removeItem('currentUser');
      console.log('token deleted');
    })
    .catch(this.handleError);
    
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

  private handleError (error: Response | any) {
    let errMsg: string;
    console.log(error);
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


}