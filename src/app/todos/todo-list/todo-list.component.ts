import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { TodosService } from '../todos.service';
import { TodoList } from '../todo-list.model';
import { MenuComponent } from '../../menu/menu.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: TodoList;
  showCompletedTodos = false;

  @ViewChild('menu') menu: MenuComponent;

  constructor(private route: ActivatedRoute,
    private todosService: TodosService,
    private title: Title) { }

  toggleShowCompletedTodos() {
    this.showCompletedTodos = !this.showCompletedTodos;
  }

  toggleMenu(event) {
    event.stopPropagation();

    if (this.menu.hidden) {
      this.menu.showMenu({
        right: '0'
      });
    } else {
      this.menu.hideMenu();
    }
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.todoList = this.todosService.getTodoList(params.id);
      this.title.setTitle(`Toodoo: ${this.todoList.name}`);
    });
  }
}
