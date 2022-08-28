import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-viewappointment',
  templateUrl: './viewappointment.component.html',
  styleUrls: ['./viewappointment.component.less']
})
export class ViewappointmentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ViewappointmentComponent>,
              @Inject(MAT_DIALOG_DATA) public appointment: any) { }

  ngOnInit(): void {
  }

}
