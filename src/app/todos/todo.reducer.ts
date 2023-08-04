import { createReducer, on } from '@ngrx/store';
import { crear } from './todo.actions';
import { Todo } from './todo.model';

export const initialState: Todo[] = [new Todo('Primera tarea')];

export const todoReducer = createReducer(
  initialState,
  on(crear, (state, { texto }) => [...state, new Todo(texto)])
);
