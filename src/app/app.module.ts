import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TodosService } from './todos/todos.service';
import { HeaderComponent } from './header/header.component';
import { TodoListsComponent } from './todos/todo-lists/todo-lists.component';
import { TodoListItemComponent } from './todos/todo-lists/todo-list-item/todo-list-item.component';
import { TodosComponent } from './todos/todos.component';
import { SelectListComponent } from './todos/select-list/select-list.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoItemComponent } from './todos/todo-list/todo-item/todo-item.component';
import { AddTodoComponent } from './todos/todo-list/add-todo/add-todo.component';
import { AddTodoListComponent } from './todos/todo-lists/add-todo-list/add-todo-list.component';
import { EditTodoListComponent } from './todos/todo-lists/edit-todo-list/edit-todo-list.component';

const appRoutes: Routes = [
  { path: 'lists', component: TodosComponent, children: [
    { path: '', component: SelectListComponent },
    { path: ':index', component: TodoListComponent }
  ]},
  { path: '', redirectTo: '/lists/0', pathMatch: 'full' }
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
    AddTodoListComponent,
    EditTodoListComponent
  ],
  entryComponents: [
    AddTodoListComponent,
    EditTodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
