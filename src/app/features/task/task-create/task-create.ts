import { Component, inject } from '@angular/core';
import { TaskForm } from '../task-form/task-form';
import { TaskService } from '../../../core/services/task.service';
import { Router } from '@angular/router';
import { Task } from '../../../core/models/task.model';

@Component({
  selector: 'app-task-create',
  imports: [TaskForm],
  templateUrl: './task-create.html',
  styleUrl: './task-create.scss',
})
export class TaskCreate {

  router = inject(Router);
  taskService = inject(TaskService);

  addTaskList(newTask: Task) {
    this.taskService.addTask(newTask);
    this.router.navigate(['/tasks']);
  }
}
