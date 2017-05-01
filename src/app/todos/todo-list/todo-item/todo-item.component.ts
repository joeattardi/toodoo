import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo

  constructor() { }

  toggleTodo() {
    this.todo.completed = !this.todo.completed;
  }

  ngOnInit() {
  }

}
