import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo.model';
import { filtrosValidos } from '../filtro/filtro.actions';

@Pipe({
  name: 'filtroTodo',
})
export class FiltroTodoPipe implements PipeTransform {
  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {
    switch (filtro) {
      case filtrosValidos.Completados:
        return todos.filter((todo) => todo.completado);
      case filtrosValidos.Pendientes:
        return todos.filter((todo) => !todo.completado);
      default:
        return todos;
    }
  }
}
