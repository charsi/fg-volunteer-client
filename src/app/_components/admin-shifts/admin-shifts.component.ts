import { Component, OnInit } from '@angular/core';

import { Shift } from '../../_models/shift';
import { ShiftService } from '../../_services/shift.service';


@Component({
  selector: 'app-admin-shifts',
  templateUrl: './admin-shifts.component.html',
  styleUrls: ['./admin-shifts.component.css']
})
export class AdminShiftsComponent implements OnInit {
  shifts: Shift[];

  constructor(private shiftService: ShiftService) { }

  ngOnInit() {
    this.getAllShifts();
  }

  getAllShifts(){
    this.shiftService.findAll().subscribe((shifts:Shift[]) => {
      this.shifts = shifts;
    });
  }

}
