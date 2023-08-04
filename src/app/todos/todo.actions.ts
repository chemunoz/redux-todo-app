import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[TODO] Crea ToDo',
  props<{ texto: string }>()
);

export const toggleCompletado = createAction(
  '[TODO] Toggle ToDo',
  props<{ id: number }>()
);

export const toggleCompletadoAll = createAction(
  '[TODO] Toggle All ToDos',
  props<{ completado: boolean }>()
);

export const editar = createAction(
  '[TODO] Editar ToDo',
  props<{ id: number; texto: string }>()
);

export const borrar = createAction(
  '[TODO] Borrar ToDo',
  props<{ id: number }>()
);
