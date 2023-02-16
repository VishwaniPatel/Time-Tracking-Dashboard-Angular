import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/";
   }
   
  // HTTP get service to get data from database
  getCardData() {
    const url: string = this.baseUrl + 'data'
    return this.http.get(url);
  }
}
