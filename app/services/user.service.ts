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
    console.log(this.user);
  }

  logout() {
    this.user.name = "";
    this.user.isLogin = false;
  }

  getUser() {
    console.log(this.user);
    return this.user;
  }
}