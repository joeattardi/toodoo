import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleTodoComponent } from './toggle-todo.component';

describe('ToggleTodoComponent', () => {
  let component: ToggleTodoComponent;
  let fixture: ComponentFixture<ToggleTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
