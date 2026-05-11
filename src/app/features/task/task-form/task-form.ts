import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.scss',
})
export class TaskForm {
  taskForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    priority: new FormControl('', [Validators.required]),
    dueDate: new FormControl('', [Validators.required])
  });

  onSubmit() {
    if (this.taskForm.invalid) {
      this.taskForm.markAllAsTouched();
      return;
    } else {
      console.log(this.taskForm.value);
    }
  }
}
