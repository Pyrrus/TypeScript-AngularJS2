import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
  <select (change)="onChangeDone($event.target.value)">
    <option value="all">Show All</option>
    <option value="isDone">Show Done</option>
    <option value="notDone" selected="selected">Show Not Done</option>
  </select>

  Type:
  <select (change)="onChangeType($event.target.value)">
    <option value="all" selected="selected">Show All</option>
    <option value="work">Show Work</option>
    <option value="home" >Show Home</option>
    <option value="hobby" >Show Hobby</option>
  </select>

  Priority:
  <select (change)="onChangePriority($event.target.value)">
    <option value="all" selected="selected">Show All</option>
    <option value="high">Show High</option>
    <option value="medium">Show Medium</option>
    <option value="low">Show Low</option>
  </select>

    <div *ngFor="let currentTask of childTaskList |  completeness:selectedCompleteness | priorities:selectedPriority | locations:selectedType">
      <h3>{{ currentTask.description }}</h3>
      <button (click)="editButtonHasBeenClicked(currentTask)">Edit</button>
    </div>
  `
})

export class TaskListComponent {
  public selectedCompleteness: string = "notDone";
  public selectedType: string = "all";
  public selectedPriority: string = "all";
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }
  onChangeDone(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
  }

  onChangeType(optionFromMenu) {
    this.selectedType = optionFromMenu;
  }

  onChangePriority(optionFromMenu) {
    this.selectedPriority = optionFromMenu;
  }
}
