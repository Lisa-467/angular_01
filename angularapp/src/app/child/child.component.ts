import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  // declare the Input property to get the data from parent comp
  @Input() getdata!: string;
  // output property to send the data from child comp to parent compont.
  @Output() sendData: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {
    console.log('getting from parent', this.getdata);
  }
  sendDataToParent() {
    const data = 'Hello Parent !';
    this.sendData.emit(data);
  }
}
