import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cardData } from './model/card.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/";
   }
   
  // HTTP get service to get data from database
  getCardData(): Observable<cardData[]> {
    const url: string = this.baseUrl + 'data'
    return this.http.get<cardData[]>(url);
  }
  deleteCompany(id:number): Observable<cardData[]> {
    const url: string = this.baseUrl + 'data/' + id;
    return this.http.delete<cardData[]>(url);
  }
  getById(id:number):Observable<cardData[]>{
    const url: string = this.baseUrl + 'data/' + id;
    return this.http.get<cardData[]>(url);
  }
}
