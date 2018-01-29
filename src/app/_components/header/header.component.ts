import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { AlertService } from '../../_services/alert.service';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth:AuthService,
    private alertService: AlertService) { }

  ngOnInit() {

  }

  public logoutee() {
    this.auth.logout().subscribe(()=>{
      this.alertService.warning('You have been logged out.', true);
    });    
  }
}
