import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { EditTodoListComponent } from '../edit-todo-list/edit-todo-list.component';
import { TodoList } from '../../todo-list.model';
import { DragDropService, Region } from '../../../drag-drop.service';
import { TodosService } from '../../todos.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input() todoList: TodoList;
  @ViewChild('dropTarget') dropTarget;

  private moveMarker: HTMLElement;

  constructor(private modalService: NgbModal,
    private dndService: DragDropService,
    private todosService: TodosService) { }

  ngOnInit() {
    this.moveMarker = document.createElement('div');
    this.moveMarker.className = 'move-marker';
    this.moveMarker.innerHTML = '<i class="fa fs-lg fa-arrow-right"></i>';
  }

  onDragStart(event: DragEvent) {
    if (this.todoList.id !== 'inbox') {
      this.dndService.currentDraggedItem = <Element> event.target;
      event.dataTransfer.setData('srcListId', this.todoList.id);
      event.dataTransfer.effectAllowed = 'move';
      (<any>event.dataTransfer).setDragImage(event.target, 0, 0);
    }
  }

  onDragLeave(event: DragEvent) {
    if (this.dndService.currentDraggedItem.classList.contains('todo')) {
      this.dropTarget.nativeElement.classList.remove('active-drop-target');
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    const targetElement = <HTMLElement>event.target;

    if (this.dndService.currentDraggedItem.classList.contains('todo')) {
      this.dropTarget.nativeElement.classList.add('active-drop-target');
    }
  }

  onDrop(event: DragEvent) {
    const srcListId = event.dataTransfer.getData('srcListId');

    if (this.dndService.currentDraggedItem.classList.contains('todo')) {
      this.dropTarget.nativeElement.classList.remove('active-drop-target');
      const todoId = event.dataTransfer.getData('todoId');
      this.todosService.moveTodo(todoId, srcListId, this.todoList.id);
    } else {
      const destIndex = this.todosService.indexOfList(this.todoList);

      if (destIndex > 0) {
        const listToMove = this.todosService.getTodoList(event.dataTransfer.getData('srcListId'));
        this.todosService.moveList(listToMove, destIndex);
      }
    }
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
