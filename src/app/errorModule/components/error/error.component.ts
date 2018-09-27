import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-error",
  templateUrl: "./error.component.html",
  styleUrls: ["./error.component.css"]
})
export class ErrorComponent implements OnInit {
  message: string;
  statusCode: string;

  constructor(private router: Router) {}

  ngOnInit() {
    const url = this.router.url;
    console.log(url);

    if (url.includes("401")) {
      this.message = "NOT AUTHORIZED";
      this.statusCode = "401";
    } else if (url.includes("404")) {
      this.message = "NOT FOUND URL";
      this.statusCode = "404";
    }
  }
}
