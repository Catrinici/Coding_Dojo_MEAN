import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css', './../task-list.component.css']
})
export class TaskDetailsComponent implements OnInit {
  @Input() tasks: any[];
  @Output() updateTasksDetails = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  complete(task){
    task.completed = !task.completed;
    console.log("completed");
  }

}
