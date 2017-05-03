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

  get activeTodos() {
    return this.todoList.todos.filter(todo => !todo.completed);
  }

  get completedTodos() {
    return this.todoList.todos.filter(todo => todo.completed);
  }

  toggleShowCompletedTodos() {
    this.showCompletedTodos = !this.showCompletedTodos;
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.todoList = this.todosService.getTodoList(params.id);
    });

    // document.addEventListener('dragstart', (event: DragEvent) => {
    //   (<any>event.dataTransfer).setDragImage(event.target, 0, 0);
    // });
    //
    // document.addEventListener('dragenter', (event: DragEvent) => {
    //   const target = (<HTMLElement> event.target);
    //   if (target.classList.contains('todo-list-item')) {
    //     target.style.background = 'red';
    //   }
    // });
    //
    // document.addEventListener('dragleave', (event: DragEvent) => {
    //   const target = (<HTMLElement> event.target);
    //   if (target.classList.contains('todo-list-item')) {
    //     target.style.background = '';
    //   }
    // });
    //
    // document.addEventListener('drop', (event: DragEvent) => {
    //   const target = (<HTMLElement> event.target);
    //   console.log(target);
    //   if (target.classList.contains('todo-list-item')) {
    //     target.style.background = 'blue';
    //   }
    // });
  }
}
