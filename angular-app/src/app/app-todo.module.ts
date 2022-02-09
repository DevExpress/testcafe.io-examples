import { NgModule } from '@angular/core';
import { TodoModule } from '../todo/todo.module';

@NgModule({
  imports: [TodoModule],
  exports: [TodoModule]
})
export class AppTodoModule { }
