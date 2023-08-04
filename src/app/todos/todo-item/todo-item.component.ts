import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { borrar, editar, toggleCompletado } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input()
  public todo!: Todo;

  @ViewChild('txtTexto') txtTexto!: ElementRef;

  public chkCompletado!: FormControl;
  public txtInput!: FormControl;

  public editando: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkCompletado.valueChanges.subscribe((valor) =>
      this.store.dispatch(toggleCompletado({ id: this.todo.id }))
    );
  }

  public editar(): void {
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);
    setTimeout(() => {
      this.txtTexto.nativeElement.select();
    }, 1);
  }

  public terminarEdicion(): void {
    if (this.txtInput.invalid || this.txtInput.value === this.todo.texto) {
      this.editando = false;
      return;
    }

    this.store.dispatch(
      editar({ id: this.todo.id, texto: this.txtInput.value })
    );
    this.editando = false;
  }

  public borrar(): void {
    this.store.dispatch(borrar({ id: this.todo.id }));
  }
}
