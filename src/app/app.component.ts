import { Store } from '@ngrx/store';

import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos/todos.service';

import { AppState } from './store/app-state';
import { LOAD_TODOS } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private todosService: TodosService, private store: Store<AppState>) { }

  ngOnInit() {
    const todoLists = this.todosService.loadTodos();
    this.store.dispatch({
      type: LOAD_TODOS,
      payload: todoLists
    });
  }
}
