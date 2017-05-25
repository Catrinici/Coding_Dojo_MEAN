import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  users = [
      {name: 'Ion Goiman', date: new Date},
      {name: 'Antonita Catrinici', date: new Date},
      {name: 'Mihail Goiman', date: new Date}
    ]

  constructor() { }

}
