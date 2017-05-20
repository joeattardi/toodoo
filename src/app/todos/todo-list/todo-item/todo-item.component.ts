import { Component, Input, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TodosService } from '../../todos.service';
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
export class TodoItemComponent {
  @Input() todo: Todo;
  @Input() todoList: TodoList;

  @ViewChild('dropTarget') dropTarget;

  priorityEnum = Priority;

  constructor(private modalService: NgbModal,
    private dndService: DragDropService,
    private todosService: TodosService) { }

  toggleTodo() {
    this.todo.completed = !this.todo.completed;
  }

  onDragStart(event: DragEvent) {
    this.dndService.currentDraggedItem = <Element> event.target;
    (<any>event.dataTransfer).setDragImage(event.target, 0, 0);
    event.dataTransfer.setData('srcListId', this.todoList.id);
    event.dataTransfer.setData('todoId', this.todo.id);
  }

  onDragOver(event: DragEvent) {
    if (this.dndService.currentDraggedItem.classList.contains('todo') && !this.todo.completed) {
      event.preventDefault();
    }
  }

  onDrop(event: DragEvent) {
    const todoId = event.dataTransfer.getData('todoId');
    const todo = this.todoList.todos.find(todo => todo.id === todoId);
    const srcIndex = this.todoList.todos.indexOf(todo);
    const destIndex = this.todoList.getActiveTodos().indexOf(this.todo);

    if (!todo.completed && !this.todo.completed) {
      this.todoList.todos.splice(srcIndex, 1);
      this.todoList.todos.splice(destIndex, 0, todo);
      this.todosService.saveTodos();
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
