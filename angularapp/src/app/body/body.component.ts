import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  firstName: string = 'Jack';

  user = {
    name: 'Rocky',
    lastName: 'Bhai',
  };
  currentTime() {
    return new Date().toLocaleTimeString();
  }
  imageUrl =
    'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg';
  isDisabled = true;
  inputValue = 'Angular';
  buttonClicked() {
    alert('Button was clicked!');
  }

  constructor() {}

  ngOnInit(): void {}
}
