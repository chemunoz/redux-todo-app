import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { filtrosValidos, setFiltro } from 'src/app/filtro/filtro.actions';

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

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('filtro')
      .subscribe((filtro) => (this.filtroActual = filtro));
  }

  public cambiarFiltro(filtro: filtrosValidos): void {
    this.store.dispatch(setFiltro({ filtro }));
  }
}
