import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.component.html',
  styleUrls: ['./data-bind.component.css'],
})
export class DataBindComponent implements OnInit {
  inputVal: string = 'Hello I am Angular Developer ';
  val1 = 'before Click';
  val3 = '';
  name: string = '';
  UpdateVal() {
    this.val1 = 'After Click';
  }
  // onInputChange(event: Event) {
  //   let inputName = event.target as HTMLInputElement;
  //   this.name = inputName.value;
  // }
  onInputChange(value: any) {
    this.name = value;
  }

  constructor() {}

  ngOnInit(): void {}
}
