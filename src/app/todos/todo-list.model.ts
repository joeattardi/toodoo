import { Todo } from './todo.model';

export class TodoList {
  name: string;
  icon: string;
  todos = [];

  constructor(name: string, todos: Todo[], icon = 'glyphicon-th-list') {
    this.name = name;
    this.todos = todos;
    this.icon = icon;
  }
}
