import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { toggleCompletadoAll } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent {
  private completado: boolean = false;

  constructor(private store: Store<AppState>) {}

  public toggleAll(): void {
    this.completado = !this.completado;
    this.store.dispatch(toggleCompletadoAll({ completado: this.completado }));
  }
}
