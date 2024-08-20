import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo1',
  templateUrl: './todo1.component.html',
  styleUrls: ['./todo1.component.css'],
})
export class Todo1Component implements OnInit {
  title: string = '';
  todoList: Todo[] = [];
  // Inject the todo Service vai : DI
  constructor(private _todoService: TodoService) {}

  ngOnInit(): void {
    this.getListTodos();
  }

  createTodo(todoTitle: any) {
    console.log('todoTitle', todoTitle);

    let objTodo = new Todo();

    (objTodo.id = new Date().getTime()),
      (objTodo.title = todoTitle),
      (objTodo.status = true);

    this._todoService.createTodo(objTodo).subscribe((res: any) => {
      console.log('create to ', res);

      this.getListTodos();
    });
  }

  getListTodos() {
    this._todoService.getTodos().subscribe((res: Todo[]) => {
      console.log('get todos', res);
      this.todoList = res;
    });
  }

  editTodo(todo: any) {
    let updateTodo = {
      id: todo.id,
      title: 'edited todo',
      status: false,
    };

    this._todoService.updateTodo(todo.id, updateTodo).subscribe((res: any) => {
      console.log('todo updeted', res);
      this.getListTodos();
    });
  }
}
