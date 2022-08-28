import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CalendarComponent} from './components/calendar/calendar.component';
import {CalendarCreator} from './service/calendarCreator.service';
import {CreateAppointmentComponent} from './components/create-appointment/create-appointment.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatRadioModule} from "@angular/material/radio";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {ViewappointmentComponent} from './components/viewappointment/viewappointment.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CreateAppointmentComponent,
    ViewappointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatRadioModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    MatOptionModule,
    MatButtonModule,
    FormsModule,
  ],
  entryComponents: [CreateAppointmentComponent, ViewappointmentComponent],

  providers: [CalendarCreator],
  bootstrap: [AppComponent]
})
export class AppModule {
}
