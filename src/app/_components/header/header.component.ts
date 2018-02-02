import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { AlertService } from '../../_services/alert.service';
import { User } from '../../_models/user';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private currentUser: User;

  constructor(
    public auth:AuthService,
    private alertService: AlertService
  ) { 
    this.currentUser = auth.getCurrentUserId();
  }

  ngOnInit() {
  
  }

  public logoutee() {
    this.auth.logout().subscribe(()=>{
      this.alertService.warning('You have been logged out.', true);
    });    
  }
}
