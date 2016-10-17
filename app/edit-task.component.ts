import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'edit-task',
  template: `
    <div *ngIf="childSelectedTask">
      <h1>Edit Task</h1>
      <div>
        <label>Enter Task Description:</label>
        <input [(ngModel)]="childSelectedTask.description">
      </div>
      <div>
        <label>Enter Priority:</label>
        <select [(ngModel)]="childSelectedTask.priority">
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">low</option>
        </select>
      </div>
      <div>
        <label>Enter Task Type:</label>
        <select [(ngModel)]="childSelectedTask.type">
            <option value="work">Work</option>
            <option value="home">Home</option>
            <option value="hobby">Hobby</option>
        </select>
        <button (click)="editClicked()">Edit</button>
        <button (click)="doneClicked()">done</button>
      </div>
    </div>
  `
})

export class EditTaskComponent {
  @Input() childSelectedTask: Task;
  @Output() doneClickedSender = new EventEmitter();
  editClicked() {
    this.doneClickedSender.emit();
  }
  doneClicked() {
    this.childSelectedTask.markDone();
  }
}
