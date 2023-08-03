import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: { id: number; title: string; done: boolean }[] = [];
  constructor(public todosService: TodosService) {}

  ngOnInit(): void {
    this.todos = this.todosService.getTodos();
  }
  updateData() {
    this.todos = this.todosService.getTodos();
  }
}
