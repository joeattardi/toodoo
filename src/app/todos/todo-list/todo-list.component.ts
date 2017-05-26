import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';

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
  showMenu = false;

  @ViewChild('menu') menu;

  constructor(private route: ActivatedRoute,
    private todosService: TodosService,
    private title: Title) {
      this.hideMenu = this.hideMenu.bind(this);
    }

  toggleShowCompletedTodos() {
    this.showCompletedTodos = !this.showCompletedTodos;
  }

  hideMenu() {
    this.showMenu = false;
    document.removeEventListener('click', this.hideMenu);
  }

  toggleMenu(event) {
    event.stopPropagation();
    this.showMenu = !this.showMenu;

    if (this.showMenu) {
      document.addEventListener('click', this.hideMenu);
      this.menu.menu.nativeElement.style.right = '0';
    }
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.todoList = this.todosService.getTodoList(params.id);
      this.title.setTitle(`Toodoo: ${this.todoList.name}`);
    });
  }
}
