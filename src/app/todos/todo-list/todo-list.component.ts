import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import dragula from 'dragula';

import { TodosService } from '../todos.service';
import { TodoList } from '../todo-list.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: TodoList;
  showCompletedTodos = false;

  constructor(private route: ActivatedRoute, private todosService: TodosService) { }

  toggleShowCompletedTodos() {
    this.showCompletedTodos = !this.showCompletedTodos;
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.todoList = this.todosService.getTodoList(params.id);
    });
  }
}
