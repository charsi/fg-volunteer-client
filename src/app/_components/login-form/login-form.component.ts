import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  error = '';
  returnUrl: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService) { }

  ngOnInit() {

  }
  login() {
    this.loading = true;
    this.authService.login(this.model.username, this.model.password)
    .subscribe(result => {
      console.log(result);
      if (result==true) {
          this.loading = false;
          this.error = '';
          //this.router.navigate(['/']);
          this.alertService.success('Success', true);
      } else this.showBadPasswordError();
    },(error)=>this.showBadPasswordError());
  }

  private showBadPasswordError():void{
    this.alertService.error('Username or password is incorrect', true);
    this.loading = false;
  }
}
