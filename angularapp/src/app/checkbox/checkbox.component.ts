import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent implements OnInit {
  var1: string = '4 june is very important day for all Bharatiyans !!';
  isChecked = false;
  course: any[] = [
    { name: 'Angular', duration: '5 months' },
    { name: '.NET', duration: '8 months' },
    { name: 'java', duration: '8 months' },
  ];
  season = ['winter', 'spring', 'summer', 'monsoon', 'autumn'];
  s1: string = this.season[2];
  constructor() {}

  ngOnInit(): void {}
}
