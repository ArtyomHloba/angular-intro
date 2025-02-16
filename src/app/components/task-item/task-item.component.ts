import { Component, Input } from '@angular/core'
import { Task } from '../core/models/task.model'

@Component({
  selector: 'app-task-item',
  standalone: false,
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!: Task
}
