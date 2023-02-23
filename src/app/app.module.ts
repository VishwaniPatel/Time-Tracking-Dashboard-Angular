import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormComponent } from './dashboard/form/form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { OverlayService } from './core/Service/overlay.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivitiesComponent } from './activities/activities.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    FormComponent,
    ActivitiesComponent,
    ProfileFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CoreModule,
    SharedModule,
    DashboardModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
