import { Component, Input, OnInit } from '@angular/core';

import { Todo } from '../../todo.model';

@Component({
  selector: 'app-toggle-todo',
  templateUrl: './toggle-todo.component.html',
  styleUrls: ['./toggle-todo.component.css']
})
export class ToggleTodoComponent implements OnInit {
  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }

  toggleTodo() {
    this.todo.completed = !this.todo.completed;
  }

}
