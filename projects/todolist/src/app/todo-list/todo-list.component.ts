import { Component } from '@angular/core';
import { TODOS } from '../../mock-todo';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  title = 'My Todo List';

  todolist: Todo[] = TODOS;

  todosDone = false;

  filteredTodos?: Todo[];

  constructor() {}

  ngOnInit() {
    console.table(this.todolist);
    this.selectedTodo(8);
  }

  selectedTodo(id: number) {
    console.table(this.todolist[id - 1]);
  }

  onClick() {
    this.todosDone = false;
    this.filteredTodos = this.todolist.filter((todo) => !todo.isCompleted);
  }

  onCheckCompleted() {
    this.todosDone = true;
    this.filteredTodos = this.todolist.filter((todo) => todo.isCompleted);
  }

  onAllClick() {
    this.todosDone = false;
    this.filteredTodos = this.todolist;
  }

}
