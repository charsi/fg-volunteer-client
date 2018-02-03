import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/user';

@Injectable()
export class UserService {
    private apiHost:string;
    constructor(private http: HttpClient) {
        this.apiHost = 'http://fgdemoapi.nishil.in/api/v1/users/';
    }
    
    loadCurrent() {
        return this.http.get<User[]>(this.apiHost);
    }

    getById(id: string) {
        return this.http.get<User>(this.apiHost + id);
    }

    create(user: User) {
        return this.http.post(this.apiHost, user);
    }

    update(user: User) {
        return this.http.put(this.apiHost + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(this.apiHost + id);
    }
}