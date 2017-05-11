import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Todo } from '../../todo.model';
import { DragDropService } from '../../../drag-drop.service';
import { TodoItemComponent } from './todo-item.component';

fdescribe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  let todoText: HTMLElement;
  let dueDate: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoItemComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [ DragDropService, { provide: NgbModal, useValue: {} } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    const todo = new Todo('1', 'Walk the dog', false, new Date(2017, 5, 12));
    component.todo = todo;
    fixture.detectChanges();

    todoText = fixture.debugElement.query(By.css('.todo-text div')).nativeElement;
    dueDate = fixture.debugElement.query(By.css('.due-date')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the todo details', () => {
    expect(todoText.innerHTML).toBe('Walk the dog');
    expect(dueDate.innerHTML).toBe('Jun 12, 2017');
  });
});
