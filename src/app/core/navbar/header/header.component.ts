import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { DashboardService } from 'src/app/dashboard/Service/dashboard.service';
import { DataTransferService } from 'src/app/dashboard/Service/data-transfer.service';
import { ProfileFormComponent } from 'src/app/profile-form/profile-form.component';
import { profileData } from 'src/app/profile-form/profile.model';
import { OverlayService } from '../../Service/overlay.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public searchBoxText: string;
  public status: boolean;
  public Form: FormGroup;
  public profile: any;

  constructor(
    private dashboardService: DashboardService,
    private router: Router,
    private formBuilder: FormBuilder,
    private overlayService: OverlayService,
    private dataTransfer: DataTransferService
  ) {
    this.status = false;
    this.searchBoxText = '';
    this.Form = this.formBuilder.group({
      searchinput: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    //Loads the data when it is updated
    this.getProfileData();
    this.dataTransfer.profileDataTransfer.subscribe((data) => {
      if (data) {
        this.getProfileData();
      }
    });
  }

  getProfileData() {
    this.dashboardService.getProfileData().subscribe((res: profileData[]) => {
      this.profile = res;
      this.dataTransfer.getProfileData(res);
    });
  }

  onSearch() {
    this.dashboardService.searchBox.next(this.searchBoxText);
  }
  onActivity() {
    this.router.navigateByUrl('/activities');
  }
  onDashboard() {
    this.router.navigateByUrl('/dashboard');
  }
  onChange() {
    const profileData = this.overlayService.open(ProfileFormComponent);
    profileData.instance.profileForm.patchValue(this.profile[0]);
    console.log(this.profile);
  }
}
