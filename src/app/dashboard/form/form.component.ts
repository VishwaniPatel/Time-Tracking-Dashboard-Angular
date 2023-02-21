import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormGroupName } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../Service/dashboard.service';
import { cardData } from '../model/card.model';
import { DataTransferService } from '../Service/data-transfer.service';
import { OverlayService } from 'src/app/core/Service/overlay.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
//for add and edit title and button
public title: string;

// companyform
public cardForm: FormGroup;

//for validation on submit 
public isSubmitted: boolean

//for getting data through id comming from list
public id: any;

//for storing company data 
public cardData: cardData[];
constructor(
  private formBuilder: FormBuilder,
  private dashboardService: DashboardService,
  private actRoute: ActivatedRoute,
  private dataTransfer: DataTransferService,
  private overlayService: OverlayService
) {
  
  
  //title
  this.title = 'Add'
  //formbuilder
  this.cardForm = this.formBuilder.group({
    title: ['', [Validators.required]],
    timeframes: this.formBuilder.group({
      daily: this.formBuilder.group({
        current: ['',[Validators.required, Number]],
        previous: ['', [Validators.required, Number]]
      }),
      weekly: this.formBuilder.group({
        current: ['',[Validators.required, Number]],
        previous: ['', [Validators.required, Number]]
      }),
      monthly: this.formBuilder.group({
        current: ['',[Validators.required, Number]],
        previous: ['', [Validators.required, Number]]
      }),
    })
  })
  //issubmit
  this.isSubmitted = false

  // /for getting data through id 
  // this.actRoute.params.subscribe(res => {
  //   this.id = res['id'];
  // })
  //initializing cardData
  this.cardData = []
}

ngOnInit(): void{
  this.dataTransfer.id$.subscribe((id)=>{
    if(id){
      this.id=id;
     this.dashboardService.getById(Number(id)).subscribe((cardData:cardData[])=>{
        this.cardForm.patchValue(cardData);
      })     
    }
  })
}
get f(): { [key: string]: AbstractControl; } {
  return this.cardForm.controls;
}


onSave(){
if(this.id){
  this.updateCardData();
  console.log("Update");
  
}
else{
  this.addCardData();
  console.log("Add");
  
}

  
}

addCardData(){
  this.dashboardService.addCardData(this.cardForm.value).subscribe((res:cardData[]) => {
    this.dataTransfer.getCardData(res);
    this.onReset();
  })
  console.log(this.cardForm.controls);
  this.overlayService.closeDialog.next(true);
}
onReset(){
  this.cardForm.reset();
}
updateCardData(){
  this.dashboardService.editCardData(this.cardForm.value,Number(this.id)).subscribe(res=>{
    this.dataTransfer.getCardData(res);
    this.onReset();
  })
  this.overlayService.closeDialog.next(true);
}

}

