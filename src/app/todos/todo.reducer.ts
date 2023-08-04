import { createReducer, on } from '@ngrx/store';
import { crear, toggleCompletado } from './todo.actions';
import { Todo } from './todo.model';

export const initialState: Todo[] = [];

export const todoReducer = createReducer(
  initialState,
  on(crear, (state: Todo[], { texto }) => [...state, new Todo(texto)]),
  on(toggleCompletado, (state: Todo[], { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  })
);
