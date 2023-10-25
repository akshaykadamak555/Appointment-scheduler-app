import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchProviderComponent } from './search-provider/search-provider.component';
import { DisplayProviderComponent } from './display-provider/display-provider.component';
import { FilterProviderComponent } from './filter-provider/filter-provider.component';
import { PatientInformationComponent } from './patient-information/patient-information.component';
import { InsuranceInformationComponent } from './insurance-information/insurance-information.component';
import { PatientDemographicsComponent } from './patient-demographics/patient-demographics.component';
import { SlotComponent } from './slot/slot.component';
import { AppointmentConfirmationComponent } from './appointment-confirmation/appointment-confirmation.component';
import { StepperComponent } from './stepper/stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchProviderComponent,
    DisplayProviderComponent,
    FilterProviderComponent,
    PatientInformationComponent,
    InsuranceInformationComponent,
    PatientDemographicsComponent,
    SlotComponent,
    AppointmentConfirmationComponent,
    StepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
