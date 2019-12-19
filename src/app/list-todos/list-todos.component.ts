import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

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

  constructor(private todoDataService: TodoDataService) { }

  ngOnInit() {
    this.todoDataService.retrieveAllTodos('manish').subscribe(
      res => {
        this.todos = res;
      }
    );
  }

}
