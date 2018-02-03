import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AlertService } from '../../_services/alert.service';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})

export class LoginFormComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private router: Router,
    private auth: AuthService,
    private alertService: AlertService) { }

  ngOnInit() {
    if (this.auth.isAuthenticated()){
      this.router.navigate(['/shifts']);
    }

  }
  login() {
    this.loading = true;
    this.auth.login(this.model.username, this.model.password)
    .subscribe(result => {
      console.log(result);
      if (result==true) {
          this.loading = false;
          //this.router.navigate(['/']);
          this.alertService.success('You have been logged in.', true);
          this.router.navigate(['shifts']);
      } else this.showBadPasswordError();
    },(error)=>this.showBadPasswordError());
  }

  private showBadPasswordError():void{
    this.alertService.error('Username or password is incorrect', true);
    this.loading = false;
  }
}
