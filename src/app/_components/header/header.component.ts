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
  private showDropdown:boolean;

  constructor(
    public auth:AuthService,
    private router:Router
  ) { 
    this.router.events.subscribe(() => {
      this.showMenu = false;
      this.showDropdown = false;
    });
  }

  ngOnInit() {
  }

  logout(){
    this.auth.logout().subscribe();
  }
}
