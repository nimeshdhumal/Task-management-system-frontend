import { inject, Injectable } from '@angular/core';
import { Task, TaskResponse } from '../models/task.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../assets/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  http = inject(HttpClient);

  getTask() {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get(`${environment.apiBaseUrl}/tasks?page=1&limit=10&sort=createdAt&order=desc`, { headers });
  }

  createTask(saveTaskForm: Task) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.post<TaskResponse>(`${environment.apiBaseUrl}/tasks`, saveTaskForm, { headers });
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
