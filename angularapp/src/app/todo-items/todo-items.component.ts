import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css'],
})
export class TodoItemsComponent implements OnInit {
  todoText: string = 'Learn Directives';
  selectedColor: string = '#ffffff';
  constructor() {}

  ngOnInit(): void {}
  onColorSelected(newColor: any) {
    this.selectedColor = newColor;
    console.log(
      'after getting value from color picker comp',
      this.selectedColor
    );
  }
}
