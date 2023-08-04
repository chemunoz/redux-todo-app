import { createReducer, on } from '@ngrx/store';
import {
  borrar,
  crear,
  editar,
  toggleCompletado,
  toggleCompletadoAll,
} from './todo.actions';
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
  }),
  on(toggleCompletadoAll, (state: Todo[], { completado }) => {
    return state.map((todo) => {
      return {
        ...todo,
        completado: completado,
      };
    });
  }),
  on(editar, (state: Todo[], { id, texto }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto: texto,
        };
      } else {
        return todo;
      }
    });
  }),
  on(borrar, (state: Todo[], { id }) => {
    return state.filter((todo) => todo.id !== id);
  })
);
