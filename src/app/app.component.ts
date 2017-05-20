import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.todosService.loadTodos();
  }
}
