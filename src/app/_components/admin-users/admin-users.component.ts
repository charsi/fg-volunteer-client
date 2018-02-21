import { Component, OnInit } from '@angular/core';

import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';



@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})

export class AdminUsersComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.findAll().subscribe((users:User[]) => {
      this.users = users;
    });
  }
}
