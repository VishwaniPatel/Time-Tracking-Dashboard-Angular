import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { cardData } from '../model/card.model';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  public communicationData:Subject<cardData[]>;
  constructor() {
    this.communicationData = new Subject();
   }
   getCardData(cardData: cardData[]) {
    this.communicationData.next(cardData);
  }
}
