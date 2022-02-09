import { NgModule } from '@angular/core';
import { TodoComponent } from './todo.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TodoComponent
  ],
  providers:    [],
  imports:      [
    CommonModule
  ],
  exports:      [
    TodoComponent
  ]
})
export class TodoModule { }
