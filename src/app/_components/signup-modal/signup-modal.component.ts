import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.css']
})

export class SignupModalComponent implements OnInit {
  modalData:any;
  showModal:boolean;

  @Input()
  set setModal(modalData: any) {
    this.modalData = modalData;
    this.showModal = modalData.showModal;
}

  ngOnInit() {
    this.showModal = false;
  }

}
