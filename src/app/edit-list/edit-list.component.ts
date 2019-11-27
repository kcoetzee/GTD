import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../shared/firebase-service.service';
import { TaskModel } from '../models/task.model';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {

  tasks: TaskModel[] = [];

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.tasksUpdated.subscribe(
      (res: TaskModel[]) => {
        this.tasks = res;
      }
    );
    this.firebaseService.getAllTasks();
  }

  DeleteTask(id: string) {
    console.log(id);
  }

}
