import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { DashboardService } from 'src/app/dashboard/Service/dashboard.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public searchBoxText: string;
  public status: boolean;
  public Form: FormGroup;
  // public searchSubject : Subject<any>;
  // public search$ : Observable;


  constructor(private dashboardService:DashboardService, private formBuilder:FormBuilder){
    this.status = false;
    this.searchBoxText='';
    this.Form = this.formBuilder.group({
      searchinput: ['', [Validators.required]]
    })
  }
  onSearch() {
    // debugger
    this.dashboardService.searchBox.next(this.searchBoxText);
    console.log(this.searchBoxText);
    // console.log("Click");
  }
}
