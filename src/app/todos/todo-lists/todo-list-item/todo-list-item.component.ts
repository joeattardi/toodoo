import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { EditTodoListComponent } from '../edit-todo-list/edit-todo-list.component';
import { TodoList } from '../../todo-list.model';
import { DragDropService } from '../../../drag-drop.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {
  @Input() todoList: TodoList;

  constructor(private modalService: NgbModal, private dndService: DragDropService) { }

  onDragLeave(event) {
    event.target.style.background = '';
  }

  onDragOver(event) {
    if (this.dndService.currentDraggedItem.classList.contains('todo')) {
      event.target.style.background = 'red';
    }
    return false;
  }

  onDrop(event) {
    console.log(event.dataTransfer.getData('todo'));
    console.log(event.dataTransfer.getData('srcList'));
    event.target.style.background = '';
  }

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
