import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor() {
  }

  getMonths() {
    return [
      {index: 1, name: 'January'},
      {index: 2, name: 'February'},
      {index: 3, name: 'March'},
      {index: 4, name: 'April'},
      {index: 5, name: 'May'},
      {index: 6, name: 'June'},
      {index: 7, name: 'July'},
      {index: 8, name: 'August'},
      {index: 9, name: 'September'},
      {index: 10, name: 'October'},
      {index: 11, name: 'November'},
      {index: 12, name: 'December'},
    ];
  }

  getWeekDays() {
    return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  }

  getMonthByIndex(monthNumber: number) {
    let d = this.getMonths();
    for (let i = 0; i < d.length; i++) {
      if (d[i].index === monthNumber) {
        return d[i].name;
      }
    }
  }
}
