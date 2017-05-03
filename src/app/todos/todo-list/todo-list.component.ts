import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { TodosService } from '../todos.service';
import { TodoList } from '../todo-list.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  private todoList: TodoList
  private showCompletedTodos = false;

  constructor(private route: ActivatedRoute, private todosService: TodosService) { }

  get activeTodos() {
    return this.todoList.todos.filter(todo => !todo.completed);
  }

  get completedTodos() {
    return this.todoList.todos.filter(todo => todo.completed);
  }

  toggleShowCompletedTodos() {
    this.showCompletedTodos = !this.showCompletedTodos;
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.todoList = this.todosService.getTodoList(params.index);
    });
  }

}
