import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OverlayService } from 'src/app/core/Service/overlay.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DashboardService } from 'src/app/dashboard/dashboard.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data: any;
  @Output() id: EventEmitter<number> = new EventEmitter<number>();
  constructor(private modalService: NgbModal,private dashboardService:DashboardService) {
    this.data = [];
    // this.title = " ";
  }
  ngOnInit(): void {
    
  }
  openVerticallyCentered(content:any) {
		this.modalService.open(content, { centered: true });
	}
  onDelete(id:number){
  console.log(id);
  this.id.emit(id);
  // this.dashboardService.deleteCompany(id).subscribe((res)=>{
  //   console.log("Card deleted");
    
  // })
  }
  
}
