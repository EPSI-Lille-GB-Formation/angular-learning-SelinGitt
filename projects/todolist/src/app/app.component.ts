import { Component } from '@angular/core';
import { Todo } from '../models/todo';
import { TODOS } from '../mock-todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Todo List';

  todolist: Todo[] = TODOS;

  constructor() { }

  ngOnInit() {
  console.table(this.todolist);
  this.selectedTodo(8);
 }

 selectedTodo(id: number) {
    console.table(this.todolist[id-1]);
  }
}
