import { Component, OnInit } from '@angular/core';


import { Shift } from '../../_models/shift';
import { ShiftService } from '../../_services/shift.service';
import { Router } from '@angular/router';
import { AlertService } from '../../_services/alert.service';

@Component({
  selector: 'app-admin-shifts-add',
  templateUrl: './admin-shifts-add.component.html',
  styleUrls: ['./admin-shifts-add.component.css']
})
export class AdminShiftsAddComponent implements OnInit {
shiftTypes = ["dismantle", "test", "build", "clean"];
shiftSubTypes = {
  dismantle:["Large", "Small"],
  test:["RAM","HDD","Misc"],
  build:[""],
  clean:[""]
};
newShift = new Shift();
submitted = false;

  constructor() { }

  ngOnInit() {
  }
  
  onSubmit(){
  }

  increment(input){
    if (input.control.value <10){
      input.control.setValue(parseInt( (input.control.value) || 0 ) +1 );
    }
  }

  decrement(input){
    if (input.control.value >0){
      input.control.setValue(parseInt( (input.control.value) || 0 ) -1 );
    }
  }
}
