import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input() todo!: {
    id: number;
    title: string;
    done: boolean;
  };
  @Output() todoUpdated = new EventEmitter<void>();
  constructor(private todosService: TodosService) {}
  removeTodo() {
    this.todosService.removeTodo(this.todo.id);
    this.todoUpdated.emit();
  }
}
