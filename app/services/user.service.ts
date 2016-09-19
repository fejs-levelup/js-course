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

    localStorage.setItem("user", JSON.stringify({
      name
    }));
    console.log(this.user);
  }

  logout() {
    this.user.name = "";
    this.user.isLogin = false;

    localStorage.removeItem("user");
  }

  getUser() {
    let user = JSON.parse(localStorage.getItem("user"));

    if(!user) return this.user;

    this.user.name = user.name;
    this.user.isLogin = true;

    return this.user;
  }
}