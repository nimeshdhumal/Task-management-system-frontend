import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.scss',
})
export class TaskForm {

  @Output() saveTaskForm = new EventEmitter<any>();

  /* Task Form defination and validators */
  taskForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    priority: new FormControl('', [Validators.required]),
    dueDate: new FormControl('', [Validators.required])
  });

  /* This button getting the task form data and submission */
  onSubmit() {
    if (this.taskForm.invalid) {
      this.taskForm.markAllAsTouched();// this method check all fields of task-form
      return;
    } else {
      /* Received all the field data from Task-Form and create a new object */
      const newTask = {
        title: this.taskForm.value.title,
        description: this.taskForm.value.description,
        status: this.taskForm.value.status,
        priority: this.taskForm.value.priority,
        dueDate: this.taskForm.value.dueDate
      }
      this.saveTaskForm.emit(newTask);// Sending the Form data from child(Task-Form) to parent(Task-List)
      this.taskForm.reset();// After the form submission reset the values of fields.
    }
  }
}
