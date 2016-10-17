import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'new-task',
  template: `
    <h1>New Task</h1>
    <div>
      <label>Enter Task Description:</label>
      <input #newDescription>
    </div>
    <div>
      <label>Enter Task Type:</label>
      <select #newType>
          <option value="work">Work</option>
          <option value="home">Home</option>
          <option value="hobby">Hobby</option>
      </select>
    </div>
    <div>
      <label>Enter Task Priority:</label>
      <select #newPriority>
          <option value="high">High</option>
          <option value="medium">medium</option>
          <option value="low">low</option>
      </select>
      <button (click)="
        addClicked(newDescription.value, newPriority.value, newType.value);
        newDescription.value='';
        newPriority.value='';
        newType.value='';
      ">Add</button>
    </div>
  `
})

export class NewTaskComponent {
  @Output() newTaskSender = new EventEmitter();
  addClicked(description: string, priority: string, type: string) {
    var newTaskToAdd: Task = new Task(description, priority, type);
    this.newTaskSender.emit(newTaskToAdd);
  }
}
