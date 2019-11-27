import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../shared/firebase-service.service';
import { TaskModel } from '../models/task.model';
import { v4 as uuid } from 'uuid';

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
    this.tasks.splice(this.tasks.findIndex(x => x.Id === id), 1);
    this.firebaseService.deleteTask(id);
  }

  NewTask() {
    if (this.newTaskValue) {
      const model = new TaskModel(
        uuid(),
        '',
        this.listId,
        '',
        false,
        null,
        [],
        false,
        false
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

  MoveToList(listId: string, id: string) {
    const model = this.tasks.find(x => x.Id === id);
    console.log(model);
    if (model) {
      model.List = listId;
      this.tasks.splice(this.tasks.findIndex(x => x.Id === id), 1);
      this.firebaseService.updateTask(model);
    }
  }

  UpdateCompleted(data: TaskModel) {
    this.firebaseService.updateTask(data);
  }

  StartEdit(data: TaskModel) {
    data.Editing = true;
    if (data.Tags) {
      data.Tags.forEach(element => {
        data.Name += ' ' + element;
      });
    }
    if (data.Project) {
      data.Name += ' Project ' + data.Project;
    }

  }

  EndEdit(data: TaskModel) {
    data.Editing = false;
    if (data.Name) {
      let tags: string[] = [];
      let projects: string[] = [];
      let text = data.Name;
      data.Tags = [];
      data.Project = '';

      tags = text.match(/@\w*/gi);
      if (tags) {
        tags.forEach(element => {
          text = text.replace(element, '');
          data.Tags.push(element.toLowerCase());
        });
      }
      // take only the first project match found
      projects = text.match(/Project .*/gi);
      if (projects) {
        if (projects.length > 0) {
          text = text.replace(projects[0], '');
          data.Project = projects[0].substr(8);
        }
      }
      text = text.trim();
      if (text) {
        data.Name = text;
        this.firebaseService.updateTask(data);
      }
    }
  }
}
