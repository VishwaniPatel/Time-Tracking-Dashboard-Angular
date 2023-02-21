import { ComponentRef, Injectable } from '@angular/core';
import {ComponentType, Overlay} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Subject } from 'rxjs';

@Injectable()
export class OverlayService {
  public closeDialog: Subject<boolean>;
public overlayData: any;
  constructor(private overLay: Overlay) {
    this.closeDialog = new Subject();
   }

  open(component:any): ComponentRef<any>{
    const positionStrategy = this.overLay.position().global().centerHorizontally().centerVertically();

    const overlayRef = this.overLay.create({
      positionStrategy, 
      hasBackdrop: true, 
      // backdropClass: 'overlay-backdrop', 
      // panelClass: 'overlay-panel',
    });

    const portal = new ComponentPortal(component);
    this.overlayData= overlayRef.attach(portal);

    overlayRef.backdropClick().subscribe(() => { overlayRef.detach(); });

    this.closeDialog.subscribe((res) => {
      if (res == true) {
        overlayRef.detach();
      }
    });
    return this.overlayData;
  }

}