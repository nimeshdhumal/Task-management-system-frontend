import { Component, inject, OnInit } from '@angular/core';
import { TaskCard } from '../task-card/task-card';
import { Router } from '@angular/router';
import { TaskService } from '../../../core/services/task.service';
@Component({
  selector: 'app-task-list',
  imports: [TaskCard],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList implements OnInit {
  taskService = inject(TaskService);
  router = inject(Router);
  tasks: any[] = [];

  ngOnInit(): void {
    this.taskService.getTask().subscribe((response: any) => {
      this.tasks = response.todos;
    });
  }

  navigateToCreateTask() {
    this.router.navigate(['/tasks/create']);
  }

}
