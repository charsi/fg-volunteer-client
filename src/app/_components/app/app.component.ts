import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AlertService } from '../../_services/alert.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private alertService: AlertService
  ) { }

    ngOnInit() {
    }
}
