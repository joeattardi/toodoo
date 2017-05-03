import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { EditTodoListComponent } from '../edit-todo-list/edit-todo-list.component';
import { TodoList } from '../../todo-list.model';
import { DragDropService } from '../../../drag-drop.service';
import { TodosService } from '../../todos.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {
  @Input() todoList: TodoList;

  constructor(private modalService: NgbModal,
    private dndService: DragDropService,
    private todosService: TodosService) { }

  onDragLeave(event: DragEvent) {
    (<HTMLElement>event.target).style.background = '';
  }

  onDragOver(event: DragEvent) {
    if (this.dndService.currentDraggedItem.classList.contains('todo')) {
      (<HTMLElement>event.target).style.background = 'red';
    }
    return false;
  }

  onDrop(event: DragEvent) {
    (<HTMLElement>event.target).style.background = '';

    const todoId = event.dataTransfer.getData('todoId');
    const srcListId = event.dataTransfer.getData('srcListId');

    this.todosService.moveTodo(todoId, srcListId, this.todoList.id);
  }

  get openTodosCount() {
    return this.todoList.todos.filter(todo => !todo.completed).length;
  }

  editList(event: MouseEvent) {
    if (!this.todoList.editable) {
      return;
    }

    event.stopPropagation();
    event.preventDefault();

    const modalRef = this.modalService.open(EditTodoListComponent);
    modalRef.componentInstance.todoList = this.todoList;
  }
}
