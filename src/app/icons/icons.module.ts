import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatSquareTextComponent } from './chat-square-text.component';
import { PersonComponent } from './person.component';
import { HeartFillComponent } from './heart-fill.component';



@NgModule({
  declarations: [ChatSquareTextComponent, PersonComponent, HeartFillComponent],
  imports: [
    CommonModule
  ],
  exports: [ChatSquareTextComponent, PersonComponent, HeartFillComponent]
})
export class IconsModule { }
export { ChatSquareTextComponent, PersonComponent, HeartFillComponent }