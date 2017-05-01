import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { TodosService } from '../../todos.service';
import { TodoList } from '../../todo-list.model';

@Component({
  selector: 'app-add-todo-list',
  templateUrl: './add-todo-list.component.html',
  styleUrls: ['./add-todo-list.component.css']
})
export class AddTodoListComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;

  constructor(private activeModal: NgbActiveModal, private todosService: TodosService) { }

  onCancel() {
    this.activeModal.close();
  }

  onAdd(addForm: NgForm) {
    this.todosService.addTodoList(new TodoList(addForm.value.name, []));
    this.activeModal.close();
  }

  ngOnInit() {
    this.nameInput.nativeElement.focus();
  }
}
