import { Component, Input } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './item.component.html'
})

export class ItemComponent {
  @Input() description: string;

  constructor () {
    this.description = '';
  }
}
