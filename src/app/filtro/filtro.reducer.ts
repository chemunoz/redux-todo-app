import { Action, createReducer, on } from '@ngrx/store';
import { filtrosValidos, setFiltro } from './filtro.actions';

export const initialState: filtrosValidos = filtrosValidos.Todos;

export const filtroReducer = createReducer<filtrosValidos, Action>(
  initialState,
  on(setFiltro, (state: filtrosValidos, { filtro }) => filtro)
);
