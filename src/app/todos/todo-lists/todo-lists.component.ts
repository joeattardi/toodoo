import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import shortid from 'shortid';

import { TodoList } from '../todo-list.model';
import { TodosService } from '../todos.service';
import { AppState } from '../../store/app-state';

@Component({
  selector: 'app-todo-lists',
  templateUrl: './todo-lists.component.html',
  styleUrls: ['./todo-lists.component.css']
})
export class TodoListsComponent {
  todoLists: Observable<TodoList[]>;

  constructor(private store: Store<AppState>, private router: Router) {
    this.todoLists = store.select('todos');
  }

  onAddClicked() {
    const newTodo = new TodoList(shortid.generate(), 'New List', []);
    // this.todosService.addTodoList(newTodo);
    // this.todosService.saveTodos();
    this.router.navigate(['/lists', newTodo.id]);
  }
}
