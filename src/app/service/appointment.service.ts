import {Injectable} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private formBuilder: FormBuilder) {
  }

  getAppointmentForm() {
    return this.formBuilder.group({
      firstName: new FormControl(null, [Validators.required, Validators.max(40)]),
      lastName: new FormControl(null, [Validators.required, Validators.max(40)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl(null),
      age: new FormControl(null),
      appointmentDate: new FormControl(null, [Validators.required]),
      appointmentTime: new FormControl(null, [Validators.required])
    });
  }
}
