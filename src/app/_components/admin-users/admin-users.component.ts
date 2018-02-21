import { Component, OnInit } from '@angular/core';

import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { AuthService } from '../../_services/auth.service';


@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  currentUser: User;
  users: User[];

  constructor(private userService: UserService, private authService:AuthService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')); 
}
  ngOnInit() {
    this.getAllusers();
  }

  getAllusers(){
    this.userService.findAll().subscribe((users:User[]) => {
      this.users = users;
    });
  }
}
