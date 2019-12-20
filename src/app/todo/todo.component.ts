import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;

  constructor(
    private activatedRoute: ActivatedRoute,
    private todoDataService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = parseInt(this.activatedRoute.snapshot.params['id']);
    this.todo = new Todo(this.id, '', false, new Date());
    if(this.id !== -1){
      this.todoDataService.retrieveTodoById('manish', this.id).subscribe(
        res => this.todo = res
      )
    }

  }

  saveTodo() {
    if(this.id === -1){
      this.todoDataService.createTodo('manish', this.todo).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['todos']);
        }
      )
    } else {
      this.todoDataService.updateTodo('manish', this.id, this.todo).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['todos']);
        }
      )
    }
  }
}
