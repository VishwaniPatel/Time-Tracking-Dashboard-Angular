import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { profileData } from 'src/app/profile-form/profile.model';
import { cardData } from '../model/card.model';

@Injectable({
  providedIn: 'root',
})
export class DataTransferService {
  public communicationData: Subject<cardData[]>;
  public idTransfer: BehaviorSubject<any>;
  public id$: Observable<number>;

  public profileDataTransfer: BehaviorSubject<any>;

  public allDataSubject: BehaviorSubject<any>;
  // public allData$ : Observable<cardData[]>

  constructor() {
    // Transfer ID
    this.idTransfer = new BehaviorSubject('');
    this.id$ = this.idTransfer.asObservable();

    // profileData transfer
    this.profileDataTransfer = new BehaviorSubject('');

    this.communicationData = new Subject();
    // Transfer all data
    this.allDataSubject = new BehaviorSubject('');
    // this.allData$ = this.allDataSubject.asObservable();
  }
  getCardData(cardData: cardData[]) {
    this.communicationData.next(cardData);
  }
  getProfileData(profileData: profileData[]) {
    this.profileDataTransfer.next(profileData);
  }
}
