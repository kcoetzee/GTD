import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../shared/firebase-service.service';
import { TaskModel } from '../models/task.model';
import { element } from 'protractor';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {
  tasks: TaskModel[] = [];
  newTaskValue = '';
  listId = 'hUjOOz8mRxKahs6ZUbTD'; // this should be dynamic !!

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {

    this.firebaseService.tasksUpdated.subscribe((res: TaskModel[]) => {
      this.tasks = res.filter(
        x => x.List === this.listId
      );
    });
    this.firebaseService.getAllTasks();
  }

  DeleteTask(id: string) {
    console.log(id);
  }

  NewTask() {
    if (this.newTaskValue) {
      const model = new TaskModel(
        null,
        '',
        this.listId,
        '',
        false,
        null,
        []
      );
      let tags: string[] = [];
      let projects: string[] = [];
      let text = this.newTaskValue;

      tags = text.match(/@\w*/gi);
      if (tags) {
        tags.forEach(element => {
          text = text.replace(element, '');
          model.Tags.push(element.toLowerCase());
        });
      }
      // take only the first project match found
      projects = text.match(/Project .*/gi);
      if (projects) {
        if (projects.length > 0) {
          text = text.replace(projects[0], '');
          model.Project = projects[0].substr(8);
        }
      }
      text = text.trim();
      if (text) {
        model.Name = text;
        const newTask: TaskModel[] = [model];
        this.tasks = newTask.concat(this.tasks);
        this.newTaskValue = '';
        this.firebaseService.createTask(model);
      }
    }
  }
}
