import { Component } from '@angular/core';

import { TodoList } from '../todo-list.model';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-lists',
  templateUrl: './todo-lists.component.html',
  styleUrls: ['./todo-lists.component.css']
})
export class TodoListsComponent {
  constructor(private todosService: TodosService) { }

  get todoLists() {
    return this.todosService.getTodoLists();
  }
}
