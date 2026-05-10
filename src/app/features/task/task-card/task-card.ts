import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-task-card',
  imports: [DatePipe],
  templateUrl: './task-card.html',
  styleUrl: './task-card.scss',
})
export class TaskCard {
  @Input() title!: string;
  @Input() description!: string;
  @Input() status!: string;
  @Input() priority!: string;
  @Input() dueDate!: Date;
}
