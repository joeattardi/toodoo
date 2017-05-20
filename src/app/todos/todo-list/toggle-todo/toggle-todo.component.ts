import { Component, Input } from '@angular/core';

import { Todo } from '../../todo.model';
import { TodosService } from '../../todos.service';

@Component({
  selector: 'app-toggle-todo',
  templateUrl: './toggle-todo.component.html',
  styleUrls: ['./toggle-todo.component.css']
})
export class ToggleTodoComponent {
  @Input() todo: Todo;

  constructor(private todosService: TodosService) { }

  toggleTodo() {
    this.todo.completed = !this.todo.completed;
    this.todosService.saveTodos();
  }

}
