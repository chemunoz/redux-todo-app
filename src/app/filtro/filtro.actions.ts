import { createAction, props } from '@ngrx/store';

export enum filtrosValidos {
  Todos = 'todos',
  Completados = 'completados',
  Pendientes = 'pendientes',
}

export const setFiltro = createAction(
  '[Filtro] Set filtro',
  props<{ filtro: filtrosValidos }>()
);
