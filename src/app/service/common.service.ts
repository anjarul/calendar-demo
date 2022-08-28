import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() {
  }

  generateUniqueKey(day: any, month: any, year: any) {
    return day + '_' + month + '_' + year;
  }
}
