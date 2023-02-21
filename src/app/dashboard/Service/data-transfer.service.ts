import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { cardData } from '../model/card.model';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  public communicationData:Subject<cardData[]>;
  public idTransfer:BehaviorSubject<any>;
  public id$ : Observable<number>;
  
  constructor() {
    this.idTransfer = new BehaviorSubject('');
    this.id$ = this.idTransfer.asObservable();
    this.communicationData = new Subject();
   }
   getCardData(cardData: cardData[]) {
    this.communicationData.next(cardData);
  }
}
