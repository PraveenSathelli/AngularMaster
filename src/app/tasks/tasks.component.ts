import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  standalone:true,
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  @Input() name!: string;

}
