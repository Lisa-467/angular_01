import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = environment.apiURL;
  // Inject the HttpClient
  constructor(private _httpClient: HttpClient) {}

  // Create - Post
  // Create - Post
  createTodo(data: any): Observable<Todo[]> {
    let API_URL = `${this.apiUrl}/todos`;
    return this._httpClient.post<Todo[]>(API_URL, data);
  }
  // Read - Get

  // Read - Get

  getTodos(): Observable<Todo[]> {
    let API_URL = `${this.apiUrl}/todos`;
    return this._httpClient.get<Todo[]>(API_URL);
  }
  // Update

  // Update

  updateTodo(id: any, data: any): Observable<Todo[]> {
    let API_URL = `${this.apiUrl}/todos/${id}`;
    return this._httpClient.put<Todo[]>(API_URL, data);
  }

  deleteTodo(id: any): Observable<Todo[]> {
    let API_URL = `${this.apiUrl}/todos/${id}`;
    return this._httpClient.delete<Todo[]>(API_URL);
  }
  getTodoById(id: number): Observable<Todo> {
    let API_URL = `${this.apiUrl}/todos/${id}`;
    return this._httpClient.get<Todo>(API_URL);
  }
}
