import { Component } from '@angular/core';
import shortid from 'shortid';

import { TodoList } from '../todo-list.model';
import { TodosService } from '../todos.service';
import { AddTodoListComponent } from './add-todo-list/add-todo-list.component';

@Component({
  selector: 'app-todo-lists',
  templateUrl: './todo-lists.component.html',
  styleUrls: ['./todo-lists.component.css']
})
export class TodoListsComponent {
  constructor(private todosService: TodosService) { }

  onAddClicked() {
    this.todosService.addTodoList(new TodoList(shortid.generate(), 'New List', []));
    this.todosService.saveTodos();
  }

  get todoLists() {
    return this.todosService.getTodoLists();
  }
}
