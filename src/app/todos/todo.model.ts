import * as moment from 'moment';
import { Priority } from './priority.enum';

export class Todo {
  text: string;
  completed: boolean;
  dueDate: Date;
  notes: string;
  priority: Priority;

  constructor(text: string, completed = false, dueDate?: Date, notes?: string, priority?: Priority) {
    this.text = text;
    this.completed = completed;
    this.dueDate = dueDate;
    this.notes = notes;
    this.priority = priority;
  }

  isOverdue(): boolean {
    return moment().isAfter(this.dueDate);
  }
}
