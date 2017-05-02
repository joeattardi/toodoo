import { TodoList } from './todo-list.model';
import { Todo } from './todo.model';

export class TodosService {
  private todoLists = [
    new TodoList('Inbox', [], 'fa-inbox', false),
    new TodoList('Home', []),
    new TodoList('Garden', [
      new Todo('Put down new mulch', false, new Date(2017, 5, 25)),
      new Todo('Pick up branches', true),
      new Todo('Plant flowers', false, new Date(2017, 3, 10))
    ]),
    new TodoList('Work', [])
  ];

  getTodoLists() {
    return this.todoLists;
  }

  getTodoList(index) {
    return this.todoLists[index];
  }

  addTodoList(list: TodoList) {
    this.todoLists.push(list);
  }

  deleteTodoList(list: TodoList) {
    this.todoLists = this.todoLists.filter(l => l !== list);
  }
}
