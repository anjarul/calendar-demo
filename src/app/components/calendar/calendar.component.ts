import {Component, OnInit} from "@angular/core";
import {CalendarCreator} from "../../service/calendarCreator.service";
import {Day} from "../../models/day.model";
import {isNotNullOrUndefined} from "codelyzer/util/isNotNullOrUndefined";
import {CreateAppointmentComponent} from "../create-appointment/create-appointment.component";
import {MatDialog} from "@angular/material/dialog";
import {ViewappointmentComponent} from "../viewappointment/viewappointment.component";
import {ConstantsService} from "../../utils/constants.service";
import {ActivatedRoute, Router, UrlTree} from "@angular/router";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.less"],
})
export class CalendarComponent implements OnInit {
  public monthDays: Day[];

  public monthNumber: number = new Date().getMonth() + 1;
  public year: number = 2022;

  public weekDaysName = [];
  months = [];

  constructor(public calendarCreator: CalendarCreator, public dialog: MatDialog, private constant: ConstantsService,
              private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.router.navigate([`/${this.constant.getMonthByIndex(this.monthNumber)}/${this.monthNumber}`]);
    this.months = this.constant.getMonths();
    this.weekDaysName = this.constant.getWeekDays();
    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
  }

  createPatient() {

    const dialogRef = this.dialog.open(CreateAppointmentComponent, {
      width: '600px',
      data: {
        month: this.monthNumber,
        year: this.year
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(this.monthNumber);
      console.log(this.year);
      this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));

    });


  }

  private setMonthDays(days: Day[]): void {
    this.monthDays = days;
    // this.monthNumber = this.monthDays[0].monthIndex;
    // this.year = this.monthDays[0].year;
  }

  showAppointmentDetails(app: any) {
    const dialogRef = this.dialog.open(ViewappointmentComponent, {
      width: '600px',
      data: app
    });
  }

  onMonthChange() {
    console.log(this.monthNumber);
    // let routeUrl = this.constant.getMonthByIndex(this.monthNumber) + '/' + this.monthNumber;

    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
    // var urlTree = this.router.createUrlTree(['Profile']);
    // this.router.navigate(this.constant.getMonthByIndex(this.monthNumber) | UrlTree);
    this.router.navigate([`/${this.constant.getMonthByIndex(this.monthNumber)}/${this.monthNumber}`]);
  }
}
