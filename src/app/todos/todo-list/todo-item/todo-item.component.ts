import { Component, Input, ViewChild } from '@angular/core';

import { TodosService } from '../../todos.service';
import { Todo } from '../../todo.model';
import { TodoList } from '../../todo-list.model';
import { Priority } from '../../priority.enum';
import { DragDropService, Region } from '../../../drag-drop.service';
import { ModalComponent } from '../../../modal/modal.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Input() todoList: TodoList;

  @ViewChild('dropTarget') dropTarget;
  @ViewChild('confirmDeleteModal') confirmDeleteModal: ModalComponent;

  priorityEnum = Priority;

  constructor(private dndService: DragDropService,
    private todosService: TodosService) { }

  toggleTodo() {
    this.todo.completed = !this.todo.completed;
  }

  confirmDelete() {
    this.confirmDeleteModal.showModal();
  }

  cancelDelete() {
    this.confirmDeleteModal.hideModal();
  }

  deleteTodo() {
    this.todoList.todos = this.todoList.todos.filter(todo => todo !== this.todo);
    this.todosService.saveTodos();
    this.confirmDeleteModal.hideModal();
  }

  onDragStart(event: DragEvent) {
    this.dndService.currentDraggedItem = <Element> event.target;
    (<any>event.dataTransfer).setDragImage(event.target, 0, 0);
    event.dataTransfer.setData('srcListId', this.todoList.id);
    event.dataTransfer.setData('todoId', this.todo.id);
  }

  onDragOver(event: DragEvent) {
    if (this.dndService.currentDraggedItem.classList.contains('todo')) {
      event.preventDefault();
    }
  }

  onDrop(event: DragEvent) {
    const todoId = event.dataTransfer.getData('todoId');
    const todo = this.todoList.todos.find(t => t.id === todoId);
    const srcIndex = this.todoList.todos.indexOf(todo);
    const destIndex = this.todoList.todos.indexOf(this.todo);

    this.todoList.todos.splice(srcIndex, 1);
    this.todoList.todos.splice(destIndex, 0, todo);
    this.todosService.saveTodos();
  }
}
