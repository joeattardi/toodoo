import { Todo } from './todo.model';

export class TodoList {
  name: string;
  icon: string;
  readonly editable: boolean;
  todos = [];

  constructor(name: string, todos: Todo[], icon = 'fa-th-list', editable = true) {
    this.name = name;
    this.todos = todos;
    this.icon = icon;
    this.editable = editable;
  }
}
