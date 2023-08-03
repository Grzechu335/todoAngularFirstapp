import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private todos = [
    {
      id: 0,
      title: 'First todo',
      done: false,
    },
    {
      id: 1,
      title: 'Second todo',
      done: false,
    },
  ];
  constructor() {}

  getTodos() {
    return this.todos;
  }

  addTodo(newTodo: { id: number; title: string; done: boolean }) {
    this.todos.push(newTodo);
  }
  updateTodo(updatedTodo: { id: number; title: string; done: boolean }) {
    this.todos[updatedTodo.id] = { ...updatedTodo };
  }
  removeTodo(id: number) {
    let newTodos = this.todos.filter((todo) => todo.id !== id);
    this.todos = [...newTodos];
  }
}
