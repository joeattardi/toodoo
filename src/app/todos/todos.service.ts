import _ from 'lodash';
import shortid from 'shortid';

import { TodoList } from './todo-list.model';
import { Todo } from './todo.model';
import { Priority } from './priority.enum';

export class TodosService {
  private todoLists: TodoList[] = [];

  getTodoLists() {
    return this.todoLists;
  }

  loadTodos() {
    const storedValue = localStorage.getItem('toodoo');
    if (storedValue) {
      const todoData = JSON.parse(storedValue);
      this.todoLists = todoData.map(listData => {
        const todosArray = listData.todos ? listData.todos.map(todoData => {
          return new Todo(todoData.id, todoData.text, todoData.completed,
            todoData.dueDate, todoData.notes, todoData.priority);
        }) : [];
        return new TodoList(listData.id, listData.name, todosArray, listData.icon, listData.editable);
      });
    } else {
      this.todoLists = [
        new TodoList('inbox', 'Inbox', [], 'fa-inbox', false)
      ];
      this.saveTodos();
    }
  }

  saveTodos() {
    localStorage.setItem('toodoo', JSON.stringify(this.todoLists));
  }

  moveTodo(todoId: string, srcListId: string, destListId: string) {
    const srcList = this.getTodoList(srcListId);
    const srcIndex = _.findIndex(srcList.todos, todo => todo.id === todoId);
    const todo = srcList.todos.splice(srcIndex, 1)[0];

    const destList = this.getTodoList(destListId);
    destList.todos.unshift(todo);
  }

  getTodoList(id: string): TodoList {
    return this.todoLists.find(todoList => todoList.id === id);
  }

  addTodoList(list: TodoList) {
    this.todoLists.push(list);
  }

  deleteTodoList(list: TodoList) {
    this.todoLists = this.todoLists.filter(l => l !== list);
  }

  indexOfList(list: TodoList): number {
    return this.todoLists.indexOf(list);
  }

  moveList(list: TodoList, destIndex: number) {
    this.todoLists.splice(this.todoLists.indexOf(list), 1);
    this.todoLists.splice(destIndex, 0, list);
  }
}
