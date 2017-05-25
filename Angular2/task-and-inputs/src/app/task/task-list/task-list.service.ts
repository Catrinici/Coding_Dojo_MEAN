import { Injectable } from '@angular/core';

@Injectable()
export class TaskListService {
  tasks = [
    { title: "First Task"},
    { title: "Second Task"},
    { title: "Third Task"}
    ]

  constructor() { }


}
