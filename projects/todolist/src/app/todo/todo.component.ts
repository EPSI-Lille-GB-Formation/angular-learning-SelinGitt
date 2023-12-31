import { Component, Input } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  @Input(('value'))
  todo?: Todo

  onCheck() {
    if (this.todo){
      this.todo.isCompleted = !this.todo.isCompleted;
    }
  }
}
