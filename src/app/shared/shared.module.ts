import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './pipe/search.pipe';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    SearchPipe,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardComponent
  ]
})
export class SharedModule { }
