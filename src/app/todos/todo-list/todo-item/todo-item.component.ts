import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { EditTodoComponent } from '../edit-todo/edit-todo.component';
import { Todo } from '../../todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo

  constructor(private modalService: NgbModal) { }

  toggleTodo() {
    this.todo.completed = !this.todo.completed;
  }

  editTodo(event) {
    event.stopPropagation();
    event.preventDefault();

    const modalRef = this.modalService.open(EditTodoComponent);
  }
}
