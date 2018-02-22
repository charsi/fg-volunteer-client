import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { environment } from '../../environments/environment';

import { AuthService } from '../_services/auth.service';

@Injectable()
export class UserService {
    private apiHost:string;
    
    constructor(private http: HttpClient, private auth:AuthService) {
        this.apiHost = environment.API_URL+'/users/';
    }
    
    loadCurrent() {
        return this.http.get<User[]>(this.apiHost);
    }

    getById(id: string) {
      return this.http.get<User>(this.apiHost + id).catch((err) => {
        this.auth.handleError(err);
        return Observable.throw(err);
      });
    }

    findAll() {
      return this.http.get<User[]>(this.apiHost).catch((err) => {
        this.auth.handleError(err);
        return Observable.throw(err);
      });
    }

    create(user: User) {
      return this.http.post(this.apiHost, user).catch((err) => {
        this.auth.handleError(err);
        return Observable.throw(err);
      });
    }

    update(user: User) {
        return this.http.put(this.apiHost + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(this.apiHost + id);
    }

}