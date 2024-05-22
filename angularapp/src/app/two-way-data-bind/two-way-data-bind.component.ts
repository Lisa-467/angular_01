import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-bind',
  templateUrl: './two-way-data-bind.component.html',
  styleUrls: ['./two-way-data-bind.component.css'],
})
export class TwoWayDataBindComponent implements OnInit {
  department: string = 'IT';
  val1: string = '';
  update: any;
  UpdateVal(value: any) {
    if (!value) {
      this.update = true;
    } else {
      this.update = false;
    }
  }
  ResetUsername() {
    this.val1 = '';
  }

  constructor() {}

  ngOnInit(): void {}
}
