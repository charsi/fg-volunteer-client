import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { User } from '../../_models/user';
import { Router } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private showMenu:boolean;
  private showUserMenu:boolean;
  private showAdminMenu:boolean;

  constructor(
    public auth:AuthService,
    private router:Router
  ) { 
    this.router.events.subscribe(() => {
      this.showMenu = false; // close dropdown when link is clicked
      this.showUserMenu = false; // close dropdown when link is clicked
      this.showAdminMenu = false; // close dropdown when link is clicked
    });
  }

  ngOnInit() {
  }

  logout(){
    this.auth.logout().subscribe();
  }
}
