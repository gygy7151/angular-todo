import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Todo } from "../model/todo";

@Injectable()
export class TodoService {
  todos: Map<Todo, Todo>;

  constructor(public http: HttpClient) {
    this.todos = new Map<Todo, Todo>();
  }

  public getTodoList(): Todo[] {
    return Array.from(this.todos.values());
  }

  public getTodosFromRemote(userId: number) {
    return this.http
      .get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
      .pipe(map(todos => todos as Todo[]));
  }

  public add(todo: Todo) {
    this.todos.set(todo, todo);
  }

  public remove(todo: Todo) {
    this.todos.delete(todo);
  }
}
