import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { DialogNextActionComponent } from './dialog-next-action.component';
import { TaskService } from '../shared/task-service.service';
import { ITask } from '../models/task.model';

@Component({
  selector: 'app-dashboard-in',
  templateUrl: './dashboard-in.component.html',
  styleUrls: ['./dashboard-in.component.css']
})
export class DashboardInComponent implements OnInit {

  constructor(private dialog: MatDialog, private taskService: TaskService ) { }
  tasks: ITask[];
  curTask : ITask;

  openDialog(): void {

    const dialogConfig = new MatDialogConfig();

    //dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(DialogNextActionComponent, dialogConfig);
  }

  deleteTask(): void {
    this.curTask = this.tasks.shift();
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe({
      next: tasks => {
        this.tasks = tasks;
        this.curTask = this.tasks.shift();
      }
    })
  }

}
