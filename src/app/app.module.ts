import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./component/about/about.component";
import { HomeComponent } from "./component/home/home.component";
import { InputComponent } from "./component/input/input.component";
import { NavigationComponent } from "./component/navigation/navigation.component";
import { PersonalTodoComponent } from "./component/personal-todo/personal-todo.component";
import { TodoItemComponent } from "./component/todo-item/todo-item.component";
import { TodoListComponent } from "./component/todo-list/todo-list.component";
import { UserComponent } from "./component/user/user.component";
import { UsersComponent } from "./component/users/users.component";
import { QuakeDirective } from "./directives/quake.directive";
import { RainbowDirective } from "./directives/rainbow.directive";
import { TodoHoverDirective } from "./directives/todo-hover.directive";
import { TodoService } from "./service/todo.service";
import { UserService } from "./service/user.service";
import { RoutingModule } from "./modules/routing/routing.module";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    InputComponent,
    TodoHoverDirective,
    QuakeDirective,
    RainbowDirective,
    HomeComponent,
    NavigationComponent,
    AboutComponent,
    UsersComponent,
    UserComponent,
    PersonalTodoComponent
  ],
  imports: [BrowserModule, HttpClientModule, RoutingModule],
  providers: [TodoService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
