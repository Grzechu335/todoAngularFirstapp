import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todos/todo/todo.component';
import { TodosService } from './todos.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TodosComponent, TodoComponent],
  imports: [BrowserModule, FormsModule],
  providers: [TodosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
