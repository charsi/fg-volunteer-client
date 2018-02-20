import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.css']
})
export class ShiftsComponent implements OnInit {
  modalData:any;
  showModal:boolean;
  dates:string[];
  shiftType:string;
  subTypes:any;
  shiftDescriptions = {
    "dismantle":"Dismantle computers and other electronics down to harvest their components.",
    "test":"Test and categorize computer parts such as RAMs and hard drives.",
    "build":"Assemble computer parts together to prepare a new computer system.",
    "clean":"Clean and organise things in the facility (one shift per day)"
  }
  constructor(private router:Router) { }

  ngOnInit() {
    this.showModal = false;
    this.modalData = {};
    this.dates = ["2018-02-03","2018-02-05","2018-02-06","2018-02-07","2018-02-08"];
    this.shiftType = this.getShift(this.router.url);
    this.subTypes = {
      dismantle:["Small","Large"],
      test:["HDD","RAM","Misc"],
      build:["Novice","Advanced"],
      clean:["Cleaning"]
    }
  }

  getShift(url:string):string{
    return url.split('/')[2];
  }

  updateModalData(eventObject):void{
    var shifts = [];
    var subTypeArray = this.subTypes[this.shiftType];
    for (var subType in subTypeArray){
      shifts.push({subType:subTypeArray[subType], availableSlots:"2"})
    }
    this.modalData = {
      date:eventObject.target.attributes['data-date'].value,
      shiftType:this.shiftType,
      shifts:shifts,
      startTime:eventObject.target.attributes['data-start-time'].value,
      endTime:eventObject.target.attributes['data-end-time'].value,
      showModal:!this.showModal
    }
    //console.log(this.modalData);
  }

  returnModaldata(){
    return this.modalData;
  }

  shiftDates(direction:string){
    if (direction==='next'){
      console.log('next');
    }else if (direction==='previous'){
      console.log('previous');
    }
  }
}
