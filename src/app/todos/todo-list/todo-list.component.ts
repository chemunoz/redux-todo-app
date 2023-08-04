import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { filtrosValidos } from 'src/app/filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public todos: Todo[] = [];
  public filtroActual!: filtrosValidos;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((store) => {
      this.todos = store.todos;
      this.filtroActual = store.filtro;
    });
  }
}
