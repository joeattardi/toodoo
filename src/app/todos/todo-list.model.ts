import { Todo } from './todo.model';

export class TodoList {
  id: string;
  name: string;
  icon: string;
  readonly editable: boolean;
  todos = [];

  constructor(id: string, name: string, todos: Todo[], icon = 'fa-th-list', editable = true) {
    this.id = id;
    this.name = name;
    this.todos = todos;
    this.icon = icon;
    this.editable = editable;
  }

  getActiveTodos() {
    return this.todos.filter(todo => !todo.completed);
  }

  getCompletedTodos() {
    return this.todos.filter(todo => todo.completed);
  }
}
