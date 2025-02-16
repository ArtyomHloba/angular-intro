import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Task } from '../core/models/task.model'

@Component({
  selector: 'app-task-item',
  standalone: false,
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: Task
  @Output() taskDeleted = new EventEmitter<number>()

  deleteTask (id: number): void {
    this.taskDeleted.emit(id)
  }
}
