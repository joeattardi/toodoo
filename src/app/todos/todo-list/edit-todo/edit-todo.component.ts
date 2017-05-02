import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

import { TodoList } from '../../todo-list.model';
import { Todo } from '../../todo.model';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  @Input() todo: Todo;
  @Input() todoList: TodoList;
  @ViewChild('textInput') textInput: ElementRef;

  text: string;
  dueDate: { year: number, month: number, day: number };

  constructor(private activeModal: NgbActiveModal) { }

  onCancel() {
    this.activeModal.close();
  }

  onEdit(editForm: NgForm) {
    this.todo.text = editForm.value.text;
    if (this.dueDate) {
      this.todo.dueDate = new Date(this.dueDate.year, this.dueDate.month - 1, this.dueDate.day);
    }

    this.activeModal.close();
  }

  onDelete() {
    this.todoList.todos = this.todoList.todos.filter(todo => todo !== this.todo);
    this.activeModal.close();
  }

  ngOnInit() {
    this.text = this.todo.text;

    if (this.todo.dueDate) {
      this.dueDate = {
        year: this.todo.dueDate.getFullYear(),
        month: this.todo.dueDate.getMonth() + 1,
        day: this.todo.dueDate.getDate()
      };
    }

    this.textInput.nativeElement.focus();
  }

}
