import { Component, OnInit } from '@angular/core';

import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { AuthService } from '../../_services/auth.service';
import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    templateUrl: 'profile.component.html',
    styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
    currentUser: User;
    userInfo: User;
    userProperties: string[];
    firstName:string;

    constructor(private userService: UserService, private authService:AuthService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.userInfo = new User; 
    }

    ngOnInit() {
        this.loadCurrentUser();
    }

    private loadCurrentUser() {
        this.userService.getById(this.currentUser.id).subscribe((userInfo:User) => {
            console.log(userInfo); 
            this.userInfo = userInfo;
            this.userProperties = Object.keys(this.userInfo); 
            this.firstName = userInfo.firstName;
        });  
    }
}