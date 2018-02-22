import { Component, OnInit } from '@angular/core';

import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { Router } from '@angular/router';
import { AlertService } from '../../_services/alert.service';

@Component({
  selector: 'app-admin-users-add',
  templateUrl: './admin-users-add.component.html',
  styleUrls: ['./admin-users-add.component.css']
})
export class AdminUsersAddComponent implements OnInit {
  newUser = new User();
  submitted = false;

  constructor(private userService: UserService, private router: Router, private alertService: AlertService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.newUser.username = 0o000; // == 0000 
    this.createNewUser(this.newUser);
  }

  createNewUser(user: User){
    this.userService.create(user).subscribe((bla) => {
      this.submitted = true;
      this.router.navigate(['/admin/users']);
      this.alertService.success('User account created for '+bla.firstName+' '+bla.lastName+'. User id : '+bla.username , true);
      //console.log(bla);
    });
  }

}
