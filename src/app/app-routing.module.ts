import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CalendarComponent} from "./components/calendar/calendar.component";


const routes: Routes = [
  { path: ":month/:index", component: CalendarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
