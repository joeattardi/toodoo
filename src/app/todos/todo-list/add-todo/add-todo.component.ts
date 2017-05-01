import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

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
    this.todoList.todos.unshift(new Todo(form.value.text));
    form.setValue({ text: '' });
  }
}
