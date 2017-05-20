import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';

import { TodosService } from '../../todos.service';
import { TodoList } from '../../todo-list.model';
import { Todo } from '../../todo.model';
import { Priority } from '../../priority.enum';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  @Input() todo: Todo;
  @Input() todoList: TodoList;
  @ViewChild('textInputEl') textInput: ElementRef;

  priorityEnum: Priority;

  text: string;
  priority: Priority;
  dueDate: { year: number, month: number, day: number };
  notes: string;

  constructor(private activeModal: NgbActiveModal, private todosService: TodosService) { }

  onCancel() {
    this.activeModal.close();
  }

  onEdit(editForm: NgForm) {
    this.todo.text = this.text;
    if (this.dueDate) {
      this.todo.dueDate = new Date(this.dueDate.year, this.dueDate.month - 1, this.dueDate.day);
    }
    this.todo.notes = this.notes;
    this.todo.priority = parseInt(editForm.value.priority, 10);

    this.todosService.saveTodos();
    this.activeModal.close();
  }

  onDelete() {
    this.todoList.todos = this.todoList.todos.filter(todo => todo !== this.todo);
    this.todosService.saveTodos();
    this.activeModal.close();
  }

  get isOverdue() {
    return this.dueDate ? moment().isAfter(
      new Date(this.dueDate.year, this.dueDate.month - 1, this.dueDate.day)) : false;
  }

  ngOnInit() {
    this.text = this.todo.text;
    this.notes = this.todo.notes;
    this.priority = this.todo.priority;

    if (this.todo.dueDate) {
      this.dueDate = {
        year: this.todo.dueDate.getFullYear(),
        month: this.todo.dueDate.getMonth() + 1,
        day: this.todo.dueDate.getDate()
      };
    }

    this.textInput.nativeElement.focus();
  }

  get priorities() {
    return [
      { label: 'High', value: Priority.HIGH },
      { label: 'Normal', value: Priority.NORMAL },
      { label: 'Low', value: Priority.LOW }
    ];
  }

}
