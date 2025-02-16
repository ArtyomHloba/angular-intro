import { Component } from '@angular/core'
import { Task } from '../core/models/task.model'
import { tasks } from '../core/moc_data/tasks'

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  myTasks: Task[] = tasks
}
