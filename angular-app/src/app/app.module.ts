import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppTodoModule } from './app-todo.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppTodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
