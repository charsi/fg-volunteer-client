import { Component, OnInit } from '@angular/core';

import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';


@Component({
    moduleId: module.id,
    templateUrl: 'profile.component.html'
})

export class ProfileComponent implements OnInit {
    currentUser: User;
    userInfo: User;
    userProperties;

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser')); 
    }

    ngOnInit() {
        this.loadCurrentUser();
    }

    private loadCurrentUser() {
        this.userService.getById(this.currentUser.id).subscribe(userInfo => { 
            this.userInfo = userInfo;
            this.userProperties = Object.keys(this.userInfo); 
        });
        
    }
}