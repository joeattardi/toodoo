import { Component, Input, OnInit } from '@angular/core';

import { TodoList } from '../../todo-list.model';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input() todoList: TodoList;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

  get openTodosCount() {
    return this.todoList.todos.filter(todo => !todo.completed).length;
  }

}
