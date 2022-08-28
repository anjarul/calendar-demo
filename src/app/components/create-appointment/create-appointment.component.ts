import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AppointmentService} from "../../service/appointment.service";
import {FormGroup} from "@angular/forms";
import {CommonService} from "../../service/common.service";

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.less']
})
export class CreateAppointmentComponent implements OnInit {

  appointmentForm: FormGroup;
  appointmentList = new Map<string, any>();

  constructor(public dialogRef: MatDialogRef<CreateAppointmentComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private appointmentService: AppointmentService,
              private commonService: CommonService) {
  }

  ngOnInit(): void {
    this.appointmentForm = this.appointmentService.getAppointmentForm();
    this.appointmentList = new Map(JSON.parse(localStorage.getItem('appointments')));
  }

  onSubmit() {
    const key = this.commonService.generateUniqueKey(new Date(this.appointmentForm.value.appointmentDate).getDate(), this.data.month, this.data.year);
    let exAppointment: any = [];
    if (this.appointmentList.has(key))
      exAppointment = this.appointmentList.get(key);
    exAppointment.push(this.appointmentForm.value);

    this.appointmentList.set(key, exAppointment);
    localStorage.setItem('appointments', JSON.stringify(Array.from(this.appointmentList.entries())));
    this.dialogRef.close();
  }

  onCancel() {
    this.dialogRef.close();
  }

}
