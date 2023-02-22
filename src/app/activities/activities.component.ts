import { Component } from '@angular/core';
import { cardData } from '../dashboard/model/card.model';
import { DataTransferService } from '../dashboard/Service/data-transfer.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent {

  public cardData: any;
  constructor(private dataTransfer:DataTransferService){
    this.cardData= [];
  }
  ngOnInit(): void{
    this.dataTransfer.allDataSubject.subscribe((res:any) =>{
      this.cardData = res;
      console.log("CardData", this.cardData);
    })
  }
}
