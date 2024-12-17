import { Component, EventEmitter, inject, Input, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../user/user.model';
import { Task } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  private taskService = inject(TasksService);
  @Input({ required: true }) userId!: string;
  @Output() closed = new EventEmitter<void>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  closedClick() {
    this.closed.emit();
  }

  onSubmmit() {
    let task: Task = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
      id: Math.random().toFixed(20),
      userId: ''
    }
    this.taskService.addTask(task,this.userId)
    // this.submited.emit(task)
    this.closedClick();
  }
}
