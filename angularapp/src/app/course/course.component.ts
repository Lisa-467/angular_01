import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  education = {
    course: 'Angular',
    instructer: 'Dnyanesh sir',
    duration: '4 month',
  };
  constructor() {}
  @Output() sendData1: EventEmitter<any> = new EventEmitter<any>();
  ngOnInit(): void {}

  bindData() {
    console.log(`in child class`);
    console.log(this.education);

    this.sendData1.emit(this.education);
  }
}
