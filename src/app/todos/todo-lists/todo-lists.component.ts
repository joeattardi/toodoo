import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import dragula from 'dragula';

import { TodoList } from '../todo-list.model';
import { TodosService } from '../todos.service';
import { AddTodoListComponent } from './add-todo-list/add-todo-list.component';

@Component({
  selector: 'app-todo-lists',
  templateUrl: './todo-lists.component.html',
  styleUrls: ['./todo-lists.component.css']
})
export class TodoListsComponent implements OnInit {
  constructor(private todosService: TodosService, private modalService: NgbModal) { }

  onAddClicked() {
    this.modalService.open(AddTodoListComponent);
  }

  get todoLists() {
    return this.todosService.getTodoLists();
  }

  ngOnInit() {
    dragula([document.getElementById('todo-list-items')], {
      moves(el, source, handle, sibling) {
        return el.id !== 'Inbox';
      },

      accepts(el, target, source, sibling) {
        return sibling === null || sibling.id !== 'Inbox';
      }
    });
  }
}
