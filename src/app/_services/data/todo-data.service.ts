import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient: HttpClient) { }

  retriveAllTodos(name: string){
    return this.httpClient.get<Todo[]>(`http://localhost:8080/users/${name}/todos`);
  }

  retriveTodo(name: string, id: number){
    return this.httpClient.get<Todo>(`http://localhost:8080/users/${name}/todos/${id}`);
  }

  updateTodo(name: string, id: number, todo: Todo){
    return this.httpClient.put(`http://localhost:8080/users/${name}/todos/${id}`, todo);
  }

  createTodo(name: string, todo: Todo){
    return this.httpClient.post(`http://localhost:8080/users/${name}/todos`, todo);
  }

  deleteTodo(name: string, id: number){
    return this.httpClient.delete(`http://localhost:8080/users/${name}/todos/${id}`);
  }
}
