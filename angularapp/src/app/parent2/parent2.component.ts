import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css'],
})
export class Parent2Component implements OnInit {
  obj1: any;
  constructor() {}

  ngOnInit(): void {}
  courseData(value: any) {
    this.obj1 = value;
    console.log(`child to parent incoming data`);
    console.log(this.obj1);
  }
}
