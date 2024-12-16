import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../user/user.model';
import { Task } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() submited = new EventEmitter<Task>();
  @Output() cancel = new EventEmitter<void>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  cancledClick() {
    this.cancel.emit();
  }

  onSubmmit() {
    let task: Task = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
      id: Math.random().toFixed(20),
      userId: ''
    }
    this.submited.emit(task)
  }
}
