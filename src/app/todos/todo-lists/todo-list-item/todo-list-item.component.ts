import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { EditTodoListComponent } from '../edit-todo-list/edit-todo-list.component';
import { TodoList } from '../../todo-list.model';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {
  @Input() todoList: TodoList;
  @Input() index: number;

  constructor(private modalService: NgbModal) { }

  get openTodosCount() {
    return this.todoList.todos.filter(todo => !todo.completed).length;
  }

  editList(event) {
    if (!this.todoList.editable) {
      return;
    }
    
    event.stopPropagation();
    event.preventDefault();

    const modalRef = this.modalService.open(EditTodoListComponent);
    modalRef.componentInstance.todoList = this.todoList;
  }
}
