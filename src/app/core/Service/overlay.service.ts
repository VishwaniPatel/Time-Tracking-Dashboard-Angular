import { ComponentRef, Injectable } from '@angular/core';
import {ComponentType, Overlay} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Injectable()
export class OverlayService {

  constructor(private overLay: Overlay) { }

  open(component:any){
    const positionStrategy = this.overLay.position().global().centerHorizontally().centerVertically();

    const overlayRef = this.overLay.create({
      positionStrategy, 
      hasBackdrop: true, 
      backdropClass: 'overlay-backdrop', 
      panelClass: 'overlay-panel',
    });

    const portal = new ComponentPortal(component);
    overlayRef.attach(portal);

    overlayRef.backdropClick().subscribe(() => { overlayRef.detach(); });
  }

}