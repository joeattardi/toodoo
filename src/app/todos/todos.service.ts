import { TodoList } from './todo-list.model';

export class TodosService {
  private todoLists = [
    new TodoList('Inbox', [], 'glyphicon-inbox'),
    new TodoList('Home', []),
    new TodoList('Garden', []),
    new TodoList('Work', [])
  ];

  getTodoLists() {
    return this.todoLists;
  }
}
