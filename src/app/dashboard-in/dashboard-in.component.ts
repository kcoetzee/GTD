import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { DialogNextActionComponent } from './dialog-next-action.component';

@Component({
  selector: 'app-dashboard-in',
  templateUrl: './dashboard-in.component.html',
  styleUrls: ['./dashboard-in.component.css']
})
export class DashboardInComponent implements OnInit {

  constructor(private dialog: MatDialog ) { }

  openDialog(): void {

    const dialogConfig = new MatDialogConfig();

    //dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(DialogNextActionComponent, dialogConfig);
  }

  ngOnInit() {
  }

}
