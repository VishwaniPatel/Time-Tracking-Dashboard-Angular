import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './navbar/header/header.component';
import { OverlayService } from './Service/overlay.service';
import {OverlayModule} from '@angular/cdk/overlay';



@NgModule({
  declarations: [
    HeaderComponent,

  ],
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports:
  [HeaderComponent],
  providers:[OverlayService]
})
export class CoreModule { }
