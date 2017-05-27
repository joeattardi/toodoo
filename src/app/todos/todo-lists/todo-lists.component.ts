import { Component } from '@angular/core';
import { Router } from '@angular/router';
import shortid from 'shortid';

import { TodoList } from '../todo-list.model';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-lists',
  templateUrl: './todo-lists.component.html',
  styleUrls: ['./todo-lists.component.css']
})
export class TodoListsComponent {
  constructor(private todosService: TodosService, private router: Router) { }

  onAddClicked() {
    const newTodo = new TodoList(shortid.generate(), 'New List', []);
    this.todosService.addTodoList(newTodo);
    this.todosService.saveTodos();
    this.router.navigate(['/lists', newTodo.id]);
  }

  get todoLists() {
    return this.todosService.getTodoLists();
  }
}
