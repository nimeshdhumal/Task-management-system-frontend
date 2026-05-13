import { Injectable } from '@angular/core';

export interface Tasks {
  title: string;
  description: string;
  status: string;
  priority: string;
  dueDate: Date;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Tasks[] = [
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
  addTaskList(newTask: Tasks) {
    this.tasks.push(newTask);// adding the form data into the array list...
  }
}
