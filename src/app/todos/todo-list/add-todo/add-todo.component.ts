import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import shortid from 'shortid';

import { Todo } from '../../todo.model';
import { TodoList } from '../../todo-list.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Input() todoList: TodoList;

  addTodo(form: NgForm) {
    if (form.valid) {
      this.todoList.todos.unshift(new Todo(shortid.generate(), form.value.text));
      form.reset();
    }
  }
}
