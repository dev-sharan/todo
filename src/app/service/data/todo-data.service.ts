import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient: HttpClient) { }

  retrieveAllTodos(username) {
    return this.httpClient.get<Todo[]>(`https://8080-f5233174-1bd3-4077-b0a1-0a846cbf243c.ws-ap01.gitpod.io/users/${username}/todos`);
  }

  deleteTodoById(username, id) {
    return this.httpClient.delete(`https://8080-f5233174-1bd3-4077-b0a1-0a846cbf243c.ws-ap01.gitpod.io/users/${username}/todos/${id}`);
  }

  retrieveTodoById(username, id) {
    return this.httpClient.get<Todo>(`https://8080-f5233174-1bd3-4077-b0a1-0a846cbf243c.ws-ap01.gitpod.io/users/${username}/todos/${id}`);
  }

  updateTodo(username, id, todo) {
    return this.httpClient.put(`https://8080-f5233174-1bd3-4077-b0a1-0a846cbf243c.ws-ap01.gitpod.io/users/${username}/todos/${id}`, todo);
  }

  createTodo(username, todo) {
    return this.httpClient.post(`https://8080-f5233174-1bd3-4077-b0a1-0a846cbf243c.ws-ap01.gitpod.io/users/${username}/todos`, todo);
  }

}
