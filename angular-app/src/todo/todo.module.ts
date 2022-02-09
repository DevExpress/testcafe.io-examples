import { NgModule } from '@angular/core';
import { TodoComponent } from './todo.component';
import { CommonModule } from '@angular/common';
import { ItemModule } from './item/item.module';

@NgModule({
  declarations: [
    TodoComponent
  ],
  providers:    [],
  imports:      [
    CommonModule,
    ItemModule
  ],
  exports:      [
    TodoComponent
  ]
})
export class TodoModule { }
