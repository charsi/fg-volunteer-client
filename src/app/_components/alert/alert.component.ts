import { Component, OnInit } from '@angular/core';
 
import { AlertService } from '../../_services/alert.service';
 
@Component({
    moduleId: module.id,
    selector: 'alert',
    templateUrl: 'alert.component.html'
})
 
export class AlertComponent {
    message: any;
    public showAlert:boolean = true;
    constructor(private alertService: AlertService) { }
 
    ngOnInit() {
        this.alertService.getMessage().subscribe(message => { 
            this.message = message;
            this.showAlert = true;
        });
        
    }
}