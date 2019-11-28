import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FirebaseService } from '../shared/firebase-service.service';
import { TaskModel } from '../models/task.model';
import { v4 as uuid } from 'uuid';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit, OnDestroy {
  tasks: TaskModel[] = [];
  newTaskValue = '';
  @Input() listId: string; // this should be dynamic !!
  @Input() listName: string;
  @Input() listColour: string;
  @Input() canAdd = false;
  isBusy = false;
  lastName = '';
  subs: Subscription;

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.subs =this.firebaseService.tasksUpdated.subscribe((res: TaskModel[]) => {
      this.tasks = res.filter(x => x.List === this.listId);
      this.isBusy = false;
    });
    this.isBusy = true;
    this.firebaseService.getAllTasks();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
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
    this.lastName = data.Name;
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
    task.Editing = false;
    task.Name = this.lastName;
    this.lastName = '';
  }
}
