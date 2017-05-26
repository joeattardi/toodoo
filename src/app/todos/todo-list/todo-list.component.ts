import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { TodosService } from '../todos.service';
import { TodoList } from '../todo-list.model';
import { MenuComponent } from '../../menu/menu.component';

const KEY_ENTER = 13;
const KEY_ESCAPE = 27;

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: TodoList;
  showCompletedTodos = false;
  editingName = false;
  listName: string;

  @ViewChild('menu') menu: MenuComponent;
  @ViewChild('nameInput') nameInput: ElementRef;

  constructor(private route: ActivatedRoute,
    private todosService: TodosService,
    private title: Title) { }

  toggleShowCompletedTodos() {
    this.showCompletedTodos = !this.showCompletedTodos;
  }

  startEditingName() {
    this.editingName = true;

    setTimeout(() => {
      this.nameInput.nativeElement.focus();
    }, 0);
  }

  onEditKeyUp(event: KeyboardEvent) {
    if (event.keyCode === KEY_ENTER) {
      this.saveName();
    } else if (event.keyCode === KEY_ESCAPE) {
      this.editingName = false;
      this.listName = this.todoList.name;
    }
  }

  saveName() {
    this.todoList.name = this.listName;
    this.editingName = false;
    this.todosService.saveTodos();
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
      this.listName = this.todoList.name;
      this.title.setTitle(`Toodoo: ${this.todoList.name}`);
    });
  }
}
