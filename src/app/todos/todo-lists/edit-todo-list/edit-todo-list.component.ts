import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

import { TodoList } from '../../todo-list.model';
import { TodosService } from '../../todos.service';

@Component({
  selector: 'app-edit-todo-list',
  templateUrl: './edit-todo-list.component.html',
  styleUrls: ['./edit-todo-list.component.css']
})
export class EditTodoListComponent implements OnInit {
  @Input() todoList: TodoList;
  @ViewChild('nameInputEl') nameInput: ElementRef;

  name: string;

  constructor(private activeModal: NgbActiveModal, private todosService: TodosService) { }

  onCancel() {
    this.activeModal.close();
  }

  onEdit(editForm: NgForm) {
    this.todoList.name = editForm.value.name;
    this.activeModal.close();
  }

  onDelete() {
    this.todosService.deleteTodoList(this.todoList);
    this.activeModal.close();
  }

  ngOnInit() {
    this.name = this.todoList.name;
    this.nameInput.nativeElement.focus();
  }
}
