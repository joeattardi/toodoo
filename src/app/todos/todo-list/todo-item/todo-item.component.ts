import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { EditTodoComponent } from '../edit-todo/edit-todo.component';
import { Todo } from '../../todo.model';
import { TodoList } from '../../todo-list.model';
import { Priority } from '../../priority.enum';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Input() todoList: TodoList

  priorityEnum = Priority;

  constructor(private modalService: NgbModal) { }

  toggleTodo() {
    this.todo.completed = !this.todo.completed;
  }

  editTodo(event) {
    event.stopPropagation();
    event.preventDefault();

    const modalRef = this.modalService.open(EditTodoComponent);
    modalRef.componentInstance.todo = this.todo;
    modalRef.componentInstance.todoList = this.todoList;
  }

  get priorityTooltip() {
    switch (this.todo.priority) {
      case Priority.HIGH:
        return 'High priority';
      case Priority.LOW:
        return 'Low priority';
      default:
        return '';
    }
  }
}
