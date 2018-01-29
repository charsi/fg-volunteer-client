import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/user';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) {}
    
    loadCurrent() {
        return this.http.get<User[]>('http://localhost:3000/api/v1/users/');
    }

    getById(id: string) {
        return this.http.get<User>('http://localhost:3000/api/v1/users/' + id);
    }

    create(user: User) {
        return this.http.post('http://localhost:3000/api/v1/users/', user);
    }

    update(user: User) {
        return this.http.put('http://localhost:3000/api/v1/users/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete('http://localhost:3000/api/v1/users/' + id);
    }
}