import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { todos } from './store';
import { AppComponent } from './app.component';
import { TodosService } from './todos/todos.service';
import { DragDropService } from './drag-drop.service';
import { MenuService } from './menu/menu.service';
import { HeaderComponent } from './header/header.component';
import { TodoListsComponent } from './todos/todo-lists/todo-lists.component';
import { TodoListItemComponent } from './todos/todo-lists/todo-list-item/todo-list-item.component';
import { TodosComponent } from './todos/todos.component';
import { SelectListComponent } from './todos/select-list/select-list.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoItemComponent } from './todos/todo-list/todo-item/todo-item.component';
import { AddTodoComponent } from './todos/todo-list/add-todo/add-todo.component';
import { ToggleTodoComponent } from './todos/todo-list/toggle-todo/toggle-todo.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { ModalComponent } from './modal/modal.component';

const appRoutes: Routes = [
  { path: 'lists', component: TodosComponent, children: [
    { path: '', component: SelectListComponent },
    { path: ':id', component: TodoListComponent }
  ]},
  { path: '', redirectTo: '/lists/inbox', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListsComponent,
    TodoListItemComponent,
    TodosComponent,
    SelectListComponent,
    TodoListComponent,
    TodoItemComponent,
    AddTodoComponent,
    ToggleTodoComponent,
    MenuComponent,
    MenuItemComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.provideStore({ todos })
  ],
  providers: [TodosService, DragDropService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
