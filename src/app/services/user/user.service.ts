import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  appUser: any;
  private _users = [{
      id: 'user1',
      currentUser: false,
      email: 'tickettoduzz@example.com',
      joined: Date.now(),
    }];

  constructor() { }

  loginUserWithEmail(email) {
    this.appUser = this._users[0];
  }
}
