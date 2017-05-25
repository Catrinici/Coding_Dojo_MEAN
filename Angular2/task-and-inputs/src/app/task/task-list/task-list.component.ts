import { Component, OnInit } from '@angular/core';
import { TaskListService } from "./task-list.service";


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css', './../task.component.css']
})
export class TaskListComponent implements OnInit {
  tasks = [];
  constructor( private _taskListService: TaskListService) {}

  ngOnInit(){
    this.tasks = this._taskListService.tasks;
    this.getTasks();
  }

  getTasks(){
   console.log(" TaskListComponent - Getting tasks!")
  }

  updateTasks(){
    this.getTasks();
  }

}
