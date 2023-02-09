import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormComponent } from './dashboard/form/form.component';
import { CardDetailsComponent } from './dashboard/card-details/card-details.component';
import { CardListComponent } from './dashboard/card-list/card-list.component';
import { ProfileEditComponent } from './dashboard/profile-edit/profile-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    FormComponent,
    CardDetailsComponent,
    CardListComponent,
    ProfileEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
