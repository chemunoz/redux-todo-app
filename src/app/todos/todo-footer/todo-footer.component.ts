import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { filtrosValidos, setFiltro } from 'src/app/filtro/filtro.actions';
import { limpiarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss'],
})
export class TodoFooterComponent implements OnInit {
  public filtroActual: filtrosValidos = filtrosValidos.Todos;
  public filtros: filtrosValidos[] = [
    filtrosValidos.Todos,
    filtrosValidos.Completados,
    filtrosValidos.Pendientes,
  ];

  public pendientes: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((store) => {
      this.filtroActual = store.filtro;
      this.pendientes = store.todos.filter((todo) => !todo.completado).length;
    });
  }

  public cambiarFiltro(filtro: filtrosValidos): void {
    this.store.dispatch(setFiltro({ filtro }));
  }

  public limpiarCompletados(): void {
    this.store.dispatch(limpiarCompletados());
  }
}
