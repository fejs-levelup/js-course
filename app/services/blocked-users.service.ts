import { Injectable } from "@angular/core";

@Injectable()
export class BlockedUsers {
  private blockedUsers: Array<string> = [];

  constructor() {}

  addUser(name) {
    if(this.isBlocked(name))
      return name;
    else {
      this.blockedUsers.push(name);

      return name;
    }
  }

  rmUser(name) {
    let i = this.blockedUsers.indexOf(name);

    if(i === -1) return null;

    this.blockedUsers.splice(i, 1);

    return name;
  }

  isBlocked(name) {
    return this.blockedUsers.includes(name);
  }
}