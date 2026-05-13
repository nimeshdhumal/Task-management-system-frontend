import { Component, inject } from '@angular/core';
import { TaskCard } from '../task-card/task-card';
import { Router } from '@angular/router';
import { TaskService } from '../../../core/services/task.service';

@Component({
  selector: 'app-task-list',
  imports: [TaskCard],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList {
  taskService = inject(TaskService);
  router = inject(Router);

  tasks = this.taskService.tasks;

  navigateToCreateTask() {
    this.router.navigate(['/tasks/create']);
  }

}
