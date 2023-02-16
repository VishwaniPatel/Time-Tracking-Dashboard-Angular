import { Component } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public dailyCardData: any;
  public weeklyCardData: any;
  public monthlyCardData: any;
  public cardData: any;
  public data: any;
  public titles: any;
  public dailyClick: boolean;
  public weeklyClick: boolean;
  public monthlyClick: boolean;
  

  constructor(private dashboardService: DashboardService) {
    this.dailyCardData = [];
    this.weeklyCardData = [];
    this.monthlyCardData = [];
    this.data = [];
    this.dailyClick = false;
    this.weeklyClick = false;
    this.monthlyClick = false;
  }

  ngOnInit(): void {
    this.getCardDetails();
    this.daily();
  }
  // get card details using service
  getCardDetails(){
    this.dashboardService.getCardData().subscribe((data:any)=>{
      this.titles=data.map((a:any)=> a.title);
      // map daily data to be display on cards
      this.dailyCardData = data.map((a:any)=> {return{
        title: a.title,
        current: a.timeframes.daily.current,
        previous: a.timeframes.daily.previous
    }});
      // map weekly data to be display on cards
      this.weeklyCardData = data.map((a:any)=>  {return{
        title: a.title,
        current: a.timeframes.weekly.current,
        previous: a.timeframes.weekly.previous
    }} );
    // map monthly data to be display on cards
      this.monthlyCardData = data.map((a:any)=>  {return{
        title: a.title,
        current: a.timeframes.monthly.current,
        previous: a.timeframes.monthly.previous
    }} );
    })
  }

  /**
   * On click of daily 
   */
  daily(){
    this.cardData = this.dailyCardData;
      this.dailyClick = true;
      this.monthlyClick=false;
      this.weeklyClick=false;
  }
  /**
   * On click of weekly 
   */
  weekly(){
    this.cardData=this.weeklyCardData;
      this.weeklyClick = true;
      this.monthlyClick=false;
      this.dailyClick=false;
  }
  /**
   * On click of monthly
   */
  monthly(){
    this.cardData=this.monthlyCardData;
      this.monthlyClick = true;
      this.weeklyClick=false;
      this.dailyClick=false;
  }
}
