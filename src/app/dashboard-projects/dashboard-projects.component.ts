import { Component, OnInit } from '@angular/core';
import { TaskModel, ProjectModel } from '../models/task.model';
import { ProjectServiceService } from '../project-service.service';

@Component({
  selector: 'app-dashboard-projects',
  templateUrl: './dashboard-projects.component.html',
  styleUrls: ['./dashboard-projects.component.css']
})
export class DashboardProjectsComponent implements OnInit {

  projects: ProjectModel[];
  constructor(private projectService :ProjectServiceService) { }

  getTasks(): void {
    this.projects = this.projectService.getTasks();
  }

  ngOnInit() {
    this.getTasks();
  }

}
