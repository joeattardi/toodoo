import * as moment from 'moment';
import { Priority } from './priority.enum';

export class Todo {
  id: string;
  text: string;
  completed: boolean;
  dueDate: Date;
  notes: string;
  priority: Priority;

  constructor(id: string, text: string, completed = false, dueDate?: Date, notes?: string, priority?: Priority) {
    this.id = id;
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
