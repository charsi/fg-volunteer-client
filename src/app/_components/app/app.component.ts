import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AlertService } from '../../_services/alert.service';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../../_services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private router: Router,
    private auth: AuthService,
    private alertService: AlertService) { }

    ngOnInit() {
      if (!this.auth.isAuthenticated()){
        this.router.navigate(['/']);
      }
    }
}
