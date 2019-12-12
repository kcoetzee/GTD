import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { DialogNextActionComponent } from '../components/dialog-next-action.component';
import { ITask } from 'src/app/shared/models/task.model';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  templateUrl: './logbook.page.html',
  styleUrls: ['./logbook.page.css']
})
export class LogbookComponent implements OnInit {

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
