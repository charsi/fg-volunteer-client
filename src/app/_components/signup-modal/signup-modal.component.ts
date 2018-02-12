import { Component, OnInit, Input } from '@angular/core';
//import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.css']
})

export class SignupModalComponent implements OnInit {
  modalData:any;
  showModal:boolean;

 /*  pageForm = new FormGroup({
    'options': new FormControl('1')
  }); */

  @Input()
  set setModal(modalData: any) {
    this.modalData = modalData;
    this.showModal = modalData.showModal;
}

  ngOnInit() {
    this.showModal = false;
  }

  doSomething(){}
}
