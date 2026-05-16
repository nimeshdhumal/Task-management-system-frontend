import { inject, Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  http = inject(HttpClient);

  getTask() {
    return this.http.get(`${environment.apiBaseUrl}/todos`);
  }

  tasks: Task[] = [
    {
      title: 'Fix login API bug', description: 'Resolve 500 error on user authentication endpoint',
      status: 'In Progress', priority: 'High', dueDate: new Date('2026-05-12')
    },
    {
      title: 'Update Q3 marketing plan', description: 'Incorporate new social media strategy and budget',
      status: 'Backlog', priority: 'Medium', dueDate: new Date('2026-06-01')
    },
    {
      title: 'Database migration', description: 'Migrate user data to PostgreSQL 15',
      status: 'Blocked', priority: 'High', dueDate: new Date('2026-05-15')
    }
  ];

  /* This function adding the Task-Form data into the Array */
  addTask(newTask: Task) {
    this.tasks.push(newTask);// adding the form data into the array list...
  }
}
