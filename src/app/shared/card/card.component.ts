import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OverlayService } from 'src/app/core/Service/overlay.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DashboardService } from 'src/app/dashboard/Service/dashboard.service';
import { FormComponent } from 'src/app/dashboard/form/form.component';
import { DataTransferService } from 'src/app/dashboard/Service/data-transfer.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data: any;
  @Output() id: EventEmitter<number> = new EventEmitter<number>();
  @Output() editId: EventEmitter<number> = new EventEmitter<number>();
  constructor(private modalService: NgbModal, private datatrasfer:DataTransferService, private overlayService:OverlayService) {
    this.data = [];
    // this.title = " ";
  }
  ngOnInit(): void {
    
  }
  openVerticallyCentered(content:any) {
		this.modalService.open(content, { centered: true });
	}
  onEdit(id:number){
    // console.log(data);
    
    // const formOverlay = this.overlayService.open(FormComponent);
    // console.log(formOverlay.instance);
    // formOverlay.instance.cardForm.patchValue(data);

    this.datatrasfer.idTransfer.next(id);
    console.log(id);
    
    this.overlayService.open(FormComponent);
    
  }
  onDelete(id:number){
  console.log(id);
  this.id.emit(id);
  this.modalService.dismissAll();
  }
  
}
