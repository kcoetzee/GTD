import { Component, OnInit, ViewChild } from '@angular/core';
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
  listId = 'I4laNXev392KK5RNlM0W'; // this should be dynamic !!
  isBusy = false;

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService.tasksUpdated.subscribe((res: TaskModel[]) => {
      this.tasks = res.filter(x => x.List === this.listId);
      this.isBusy = false;
    });
    this.isBusy = true;
    this.firebaseService.getAllTasks();
  }

  DeleteTask(id: string) {
    this.tasks.splice(
      this.tasks.findIndex(x => x.Id === id),
      1
    );
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

      let text = this.newTaskValue;
      text = this.getTags(model, text);
      text = this.getProject(model, text);
      text = text.trim();
      if (text) {
        model.Name = text;
        console.log(model);
        const newTask: TaskModel[] = [model];
        this.tasks = newTask.concat(this.tasks);
        this.newTaskValue = '';
        this.firebaseService.createTask(model);
      }
    }
  }

  private getTags(model: TaskModel, text: string): string {
    let tags: string[] = [];
    tags = text.match(/@\w*/gi);
    if (tags) {
      tags.forEach(element => {
        text = text.replace(element, '');
        model.Tags.push(element.toLowerCase());
      });
    }
    return text;
  }

  private getProject(model: TaskModel, text: string): string {
    // take only the first project match found
    let projects: string[] = [];
    projects = text.match(/Project .*/gi);
    if (projects) {
      if (projects.length > 0) {
        text = text.replace(projects[0], '');
        model.Project = projects[0].substr(8);
      }
    }
    return text;
  }

  MoveToList(listId: string, id: string) {
    const model = this.tasks.find(x => x.Id === id);
    console.log(model);
    if (model) {
      model.List = listId;
      this.tasks.splice(
        this.tasks.findIndex(x => x.Id === id),
        1
      );
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
      let text = data.Name;
      data.Tags = [];
      data.Project = '';
      text = this.getTags(data, text);
      text = this.getProject(data, text);
      text = text.trim();
      if (text) {
        data.Name = text;
        this.firebaseService.updateTask(data);
      }
    }
  }

  CancelEdit(task: TaskModel) {
    console.log(task);
    task.Editing = false;
  }
}
