import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
