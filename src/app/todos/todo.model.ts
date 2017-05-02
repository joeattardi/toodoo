import * as moment from 'moment';

export class Todo {
  text: string;
  dueDate: Date;
  completed: boolean;

  constructor(text: string, completed = false, dueDate?: Date) {
    this.text = text;
    this.completed = completed;
    this.dueDate = dueDate;
  }

  isOverdue(): boolean {
    return moment().isAfter(this.dueDate);
  }
}
