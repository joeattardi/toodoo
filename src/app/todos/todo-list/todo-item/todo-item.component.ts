import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { EditTodoComponent } from '../edit-todo/edit-todo.component';
import { Todo } from '../../todo.model';
import { TodoList } from '../../todo-list.model';
import { Priority } from '../../priority.enum';
import { DragDropService, Region } from '../../../drag-drop.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Input() todoList: TodoList;

  @ViewChild('dropTarget') dropTarget;

  private moveMarker: HTMLElement;

  priorityEnum = Priority;

  constructor(private modalService: NgbModal, private dndService: DragDropService) { }

  ngOnInit() {
    this.moveMarker = document.createElement('div');
    this.moveMarker.className = 'move-marker';
  }

  toggleTodo() {
    this.todo.completed = !this.todo.completed;
  }

  removeMarker() {
    if (this.moveMarker.parentNode) {
      this.moveMarker.parentNode.removeChild(this.moveMarker);
    }
  }

  onDragStart(event: DragEvent) {
    this.dndService.currentDraggedItem = <Element> event.target;
    (<any>event.dataTransfer).setDragImage(event.target, 0, 0);
    event.dataTransfer.setData('srcListId', this.todoList.id);
    event.dataTransfer.setData('todoId', this.todo.id);
  }

  onDragEnd(event: DragEvent) {
    this.removeMarker();
  }

  onDragLeave(event: DragEvent) {
    this.removeMarker();
  }

  onDragOver(event: DragEvent) {
    if (this.dndService.currentDraggedItem.classList.contains('todo') && !this.todo.completed) {
      event.preventDefault();

      const parent = this.dropTarget.nativeElement.parentNode;
      const region = this.dndService.getRegion(event);
      if (region === Region.TOP) {
        parent.insertBefore(this.moveMarker, this.dropTarget.nativeElement);
      } else {
        parent.insertBefore(this.moveMarker, this.dropTarget.nativeElement.nextSibling);
      }
    }
  }

  onDrop(event: DragEvent) {
    const todoId = event.dataTransfer.getData('todoId');
    const todo = this.todoList.todos.find(todo => todo.id === todoId);
    const srcIndex = this.todoList.todos.indexOf(todo);
    const destIndex = this.todoList.getActiveTodos().indexOf(this.todo);

    if (!todo.completed && !this.todo.completed) {
      this.removeMarker();
      this.dndService.handleDropLogic(srcIndex, destIndex, event, insertionIndex => {
        this.todoList.todos.splice(srcIndex, 1);
        this.todoList.todos.splice(insertionIndex, 0, todo);
      });
    }
  }

  editTodo(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();

    document.getElementById('add-todo-text').blur();

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
