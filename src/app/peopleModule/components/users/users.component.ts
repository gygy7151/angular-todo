import { Component, OnInit } from "@angular/core";
import { User } from "../../model/user";
import { UserService } from "../../services/user.service";

@Component({
  selector: "users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  title = "PEOPLE";

  public users: User[];

  constructor(public userService: UserService) {
    console.log("users Component");
  }

  ngOnInit() {
    this.initUsers();
  }

  private initUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}
