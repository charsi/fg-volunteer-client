import { Injectable } from '@angular/core';

@Injectable()
export class AuthTokenService {
    public getToken(): string {
        let token = localStorage.getItem('currentuser.token');
        console.log(token);
        return token;
    }
}