import { NgModule } from '@angular/core';
import { ItemComponent } from './item.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ItemComponent
  ],
  providers:    [],
  imports:      [
    CommonModule
  ],
  exports:      [
    ItemComponent
  ]
})
export class ItemModule { }
