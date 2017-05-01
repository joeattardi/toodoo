import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTodoListComponent } from './edit-todo-list.component';

describe('EditTodoListComponent', () => {
  let component: EditTodoListComponent;
  let fixture: ComponentFixture<EditTodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTodoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
