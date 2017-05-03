import * as moment from 'moment';

export class Todo {
  text: string;
  completed: boolean;
  dueDate: Date;
  notes: string;

  constructor(text: string, completed = false, dueDate?: Date, notes?: string) {
    this.text = text;
    this.completed = completed;
    this.dueDate = dueDate;
    this.notes = notes;
  }

  isOverdue(): boolean {
    return moment().isAfter(this.dueDate);
  }
}
