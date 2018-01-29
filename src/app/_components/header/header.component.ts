import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';


@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

  public logoutee() {
    this.auth.logout().subscribe((ee) => { 
      console.log(ee); 
    });    
  }
}
