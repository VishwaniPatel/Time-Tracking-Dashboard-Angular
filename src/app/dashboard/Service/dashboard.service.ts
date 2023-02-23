import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { profileData } from 'src/app/profile-form/profile.model';
import { cardData } from '../model/card.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private baseUrl: string;
  public searchBox: Subject<string>;
  public seacrhBoxText$: Observable<string>;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000/';
    this.searchBox = new Subject();
    this.seacrhBoxText$ = this.searchBox.asObservable();
  }

  // HTTP get service to get data from database
  getCardData(): Observable<cardData[]> {
    const url: string = this.baseUrl + 'data';
    return this.http.get<cardData[]>(url);
  }
  deleteCompany(id: number): Observable<cardData[]> {
    const url: string = this.baseUrl + 'data/' + id;
    return this.http.delete<cardData[]>(url);
  }
  getById(id: number): Observable<cardData[]> {
    const url: string = this.baseUrl + 'data/' + id;
    return this.http.get<cardData[]>(url);
  }
  addCardData(cardData: cardData[]): Observable<cardData[]> {
    const url: string = this.baseUrl + 'data/';
    return this.http.post<cardData[]>(url, cardData);
  }
  // HTTP put service to update data from database
  editCardData(cardData: cardData[], id: number): Observable<cardData[]> {
    const url: string = this.baseUrl + 'data/' + id;
    return this.http.put<cardData[]>(url, cardData);
  }
  getProfileData(): Observable<profileData[]> {
    const url: string = this.baseUrl + 'profileData';
    return this.http.get<profileData[]>(url);
  }
  addProfileData(profileData: any): Observable<profileData[]> {
    const url: string = this.baseUrl + 'profileData';
    return this.http.post<profileData[]>(url, profileData);
  }
  editProfileData(profileData: any, id: number): Observable<profileData[]> {
    const url: string = this.baseUrl + 'profileData/' + id;
    return this.http.put<profileData[]>(url, profileData);
  }
  getProfileByID(id: number): Observable<profileData[]> {
    const url: string = this.baseUrl + 'profileData/' + id;
    return this.http.get<profileData[]>(url);
  }
}
