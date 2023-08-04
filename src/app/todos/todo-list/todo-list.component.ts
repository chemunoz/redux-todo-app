import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public todos: Todo[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('todos').subscribe((todos) => (this.todos = todos));
  }
}
