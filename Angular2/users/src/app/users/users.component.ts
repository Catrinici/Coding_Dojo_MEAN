import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from "../user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  


  constructor(private _userService: UserService) {}

  ngOnInit() {
    this.users = this._userService.users;
  }

}
