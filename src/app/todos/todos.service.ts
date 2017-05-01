import { TodoList } from './todo-list.model';
import { Todo } from './todo.model';

export class TodosService {
  private todoLists = [
    new TodoList('Inbox', [], 'fa-inbox'),
    new TodoList('Home', []),
    new TodoList('Garden', [
      new Todo('Put down new mulch'),
      new Todo('Pick up branches', true)
    ]),
    new TodoList('Work', [])
  ];

  getTodoLists() {
    return this.todoLists;
  }

  getTodoList(index) {
    return this.todoLists[index];
  }
}
