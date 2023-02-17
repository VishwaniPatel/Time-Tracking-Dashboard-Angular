import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './navbar/header/header.component';
import { OverlayService } from './Service/overlay.service';
import {OverlayModule} from '@angular/cdk/overlay';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,

  ],
  imports: [
    CommonModule,
    OverlayModule,
    ReactiveFormsModule
  ],
  exports:
  [HeaderComponent],
  providers:[OverlayService]
})
export class CoreModule { }
