import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from 'src/app/dashboard/dashboard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public searchBoxText: any;
  public status: boolean;
  public Form: FormGroup;

  constructor(private dashboardService:DashboardService, private formBuilder:FormBuilder){
    this.status = false;
    this.Form = this.formBuilder.group({
      searchinput: ['', [Validators.required, Validators.minLength(2)]]
    })
  }
  onSearch() {
    this.dashboardService.searchBox.next(this.searchBoxText);
  }
}
