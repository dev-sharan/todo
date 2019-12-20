import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(public id: number, public description: string, public done: boolean, public targetDate: Date) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {

  todos: any;
  message: string;

  constructor(
    private todoDataService: TodoDataService,
    private router: Router
    ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoDataService.retrieveAllTodos('manish').subscribe(
      res => {
        this.todos = res;
      }
    );
  }

  deleteTodo(id) {
    this.todoDataService.deleteTodoById('manish', id).subscribe(
      res => {
        console.log(res);
        this.message = 'delete successfull';
        this.refreshTodos();
      }
    )
  }

  updateTodo(id) {
    this.router.navigate(['todos', id]);
  }

  addTodo(id) {
    this.router.navigate(['todos', -1]);
  }
}
