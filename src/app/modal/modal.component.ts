import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  hidden = true;

  constructor() { }

  ngOnInit() {
  }

  showModal() {
    this.hidden = false;
  }

  hideModal() {
    this.hidden = true;
  }

}
