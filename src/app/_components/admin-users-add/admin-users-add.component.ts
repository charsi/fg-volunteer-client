import { Component, OnInit } from '@angular/core';

import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-admin-users-add',
  templateUrl: './admin-users-add.component.html',
  styleUrls: ['./admin-users-add.component.css']
})
export class AdminUsersAddComponent implements OnInit {
  newUser = new User();
  submitted = false;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.newUser);
  }

}
