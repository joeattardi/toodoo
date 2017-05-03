import shortid from 'shortid';

import { TodoList } from './todo-list.model';
import { Todo } from './todo.model';
import { Priority } from './priority.enum';

export class TodosService {
  private todoLists = [
    new TodoList('inbox', 'Inbox', [], 'fa-inbox', false),
    new TodoList(shortid.generate(), 'Home', []),
    new TodoList(shortid.generate(), 'Garden', [
      new Todo(shortid.generate(), 'Put down new mulch', false, new Date(2017, 5, 25), 'Some notes', Priority.HIGH),
      new Todo(shortid.generate(), 'Pick up branches', true),
      new Todo(shortid.generate(), 'Trim hedges', false, null, '', Priority.NORMAL),
      new Todo(shortid.generate(), 'Plant flowers', false, new Date(2017, 3, 10), 'Pretty flowers', Priority.LOW)
    ]),
    new TodoList(shortid.generate(), 'Work', [])
  ];

  getTodoLists() {
    return this.todoLists;
  }

  getTodoList(id: string) {
    console.log(this.todoLists);
    return this.todoLists.find(todoList => todoList.id === id);
  }

  addTodoList(list: TodoList) {
    this.todoLists.push(list);
  }

  deleteTodoList(list: TodoList) {
    this.todoLists = this.todoLists.filter(l => l !== list);
  }
}
