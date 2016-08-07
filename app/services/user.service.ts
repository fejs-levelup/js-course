import { Injectable } from "@angular/core";

class User {
  name = "";
  isLogin = false;
}

@Injectable()
export class AppUser {
  user = new User();

  login(name) {
    this.user.name = name;
    this.user.isLogin = true;
  }

  getUser() {
    return this.user;
  }
}