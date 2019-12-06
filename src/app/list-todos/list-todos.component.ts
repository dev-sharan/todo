import { Component, OnInit } from '@angular/core';

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

  todos = [
    new Todo(1, 'learn to read', false, new Date(2019, 5, 25)),
    new Todo(2, 'practice to read', false, new Date(2019, 6, 21)),
  ]

  constructor() { }

  ngOnInit() {
  }

}
