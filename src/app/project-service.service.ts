import { Injectable } from '@angular/core';
import { TaskModel } from './models/task.model';
import { ProjectModel } from './models/task.model';
import { PROJECTS } from './mock-projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {
  projects: ProjectModel[];
  constructor() { }

  getTasks(): ProjectModel[] {
    return PROJECTS;
  }
}
