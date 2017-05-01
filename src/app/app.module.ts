import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodosService } from './todos/todos.service';
import { HeaderComponent } from './header/header.component';
import { TodoListsComponent } from './todos/todo-lists/todo-lists.component';
import { TodoListItemComponent } from './todos/todo-lists/todo-list-item/todo-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListsComponent,
    TodoListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
