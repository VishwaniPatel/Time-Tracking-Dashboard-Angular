import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './pipe/search.pipe';
import { CardComponent } from './card/card.component';
import { NgbDropdownModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    SearchPipe,
    CardComponent
  ],
  imports: [
    CommonModule,
    NgbDropdownModule,
  ],
  exports:[
    CardComponent
  ]
})
export class SharedModule { }
