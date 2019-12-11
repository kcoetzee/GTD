import { Component, OnInit } from '@angular/core';
import { TaskModel, ProjectModel } from 'src/app/shared/models/task.model';

@Component({
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.css']
})
export class ProjectsComponent implements OnInit {

  projects: ProjectModel[];
  constructor() { }

  getTasks(): void {

  }

  taskDone(name) : void {
    for (let project of this.projects){
      for (let task of project.Tasks){
          if (task.Name === name){
            task.Completed = true;
          }
      }
    }
  }

  deleteTask(name) : void {
    console.log("GOT HERE")
    for (let project of this.projects){
      for (let task of project.Tasks){
          if (task.Name === name){
            task.Deleted = true;
            console.log("GOT HERE")
          }
      }
    }   
  }

  ngOnInit() {
    this.getTasks();
  }

}
