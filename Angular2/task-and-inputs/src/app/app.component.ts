import { Component } from '@angular/core';
import { TaskListService } from "./task/task-list/task-list.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task and Inputs';
  tasksOfAppComponent = [];

  constructor( private _taskListService: TaskListService) {
    this.tasksOfAppComponent = _taskListService.tasks
  }
}
