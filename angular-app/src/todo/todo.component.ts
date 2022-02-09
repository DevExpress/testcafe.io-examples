import { Component } from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html'
})

export class TodoComponent {
  title = 'todo';

  allItems: string[] = [];

  get items() {
    return this.allItems;
  }

  addItem(description: string) {
    this.allItems.push(description);
  }
}
