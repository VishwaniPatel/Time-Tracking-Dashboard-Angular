import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OverlayService } from '../core/Service/overlay.service';
import { DashboardService } from '../dashboard/Service/dashboard.service';
import { DataTransferService } from '../dashboard/Service/data-transfer.service';
import { profileData } from './profile.model';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
})
export class ProfileFormComponent {
  //for validation on submit
  public isSubmitted: boolean;
  // profile form
  public profileForm: FormGroup;
  public base64String: any;
  public imageFile!: File;
  public isImagevalue: boolean;
  public profileData: profileData[];
  public id: number;

  constructor(
    private formBuilder: FormBuilder,
    private dashboadrService: DashboardService,
    private overlayService: OverlayService,
    private dataTransfer: DataTransferService
  ) {
    //issubmit
    this.isSubmitted = false;
    this.base64String = '';
    this.isImagevalue = false;
    this.id = 1;
    this.profileForm = this.formBuilder.group({
      userName: ['', Validators.required],
      profileImage: ['', Validators.required],
      profilePath: [''],
      imageName: [''],
    });
    this.profileData = [];
  }

  ngOnInit(): void {
    // this.dashboadrService.getProfileData().subscribe((res: profileData[]) => {
    //   console.log('Profile', res);
    //   // this.profileForm.setValue(res);
    // });
  }
  onReset() {
    this.profileForm.reset();
  }
  onEdit() {
    this.isSubmitted = true;
    // this.profileForm.controls['userName'].patchValue()
    this.profileForm.controls['profilePath'].patchValue(this.imageFile.name);
    this.profileForm.controls['imageName'].patchValue(this.base64String);

    // this.dashboadrService
    //   .addProfileData(this.profileForm.value)
    //   .subscribe((res) => {});
    this.dashboadrService
      .editProfileData(this.profileForm.value, this.id)
      .subscribe((res) => {
        // this.dataTransfer.getProfileData(res);
      });
    this.profileForm.reset();
    this.overlayService.closeDialog.next(true);
  }

  imageUploaded(event: any) {
    if (event.target.files.length > 0) {
      this.imageFile = event.target.files[0];
      // console.log(this.imageFile);
    }
    var reader = new FileReader();
    reader.onload = () => {
      this.base64String = String(reader.result);
    };
    reader.readAsDataURL(this.imageFile);
    if (this.imageFile) {
      this.isImagevalue = true;
    }
  }
}
