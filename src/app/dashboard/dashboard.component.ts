import { Component } from '@angular/core';
import { OverlayService } from '../core/Service/overlay.service';
import { DashboardService } from './dashboard.service';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { cardData } from './model/card.model';

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
  public serchBoxText: string;
  

  constructor(private dashboardService: DashboardService, private overlayService: OverlayService) {
    this.dailyCardData = [];
    this.weeklyCardData = [];
    this.monthlyCardData = [];
    this.data = [];
    this.dailyClick = false;
    this.weeklyClick = false;
    this.monthlyClick = false;
    this.serchBoxText = '';
  }
  
  ngOnInit(): void {
    this.dashboardService.seacrhBoxText$.subscribe((res:any)=>{
      if(res){
        this.getCardDetails();
      }
    })
    this.getCardDetails();
  }
  // get card details using service
  getCardDetails(){
    this.dashboardService.getCardData().subscribe((data:cardData[]) =>
    {
      // this.titles=data.map(a=> a.title);
      // map daily data to be display on cards
      this.dailyCardData = data.map(a=> {return{
        id:a.id,
        title: a.title,
        current: a.timeframes?.daily?.current,
        previous: a.timeframes?.daily?.previous
      }});
    // map weekly data to be display on cards
    this.weeklyCardData = data.map(a=>  {return{
      id:a.id,
      title: a.title,
      current: a.timeframes?.weekly?.current,
      previous: a.timeframes?.weekly?.previous
    }} );
    // map monthly data to be display on cards
      this.monthlyCardData = data.map(a=>  {return{       
        id:a.id,
        title: a.title,
        current: a.timeframes?.monthly?.current,
        previous: a.timeframes?.monthly?.previous
      }} );
      this.daily();
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

  onDeleteCard(id:number){
    this.dashboardService.deleteCompany(id).subscribe((response)=>{
      this.getCardDetails();
    })
  }

}