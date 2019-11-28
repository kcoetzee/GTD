import { TaskModel, ProjectModel } from './models/task.model';


export const PROJECTS: ProjectModel[] = [
  {
    Id: "Acturis",
    Tasks: [
      { Id: "1", Name: "Fix Defect 322123", List: "Dunno", Project: "Acturis", Completed: false, CompletedByDate: new Date(), Tags:[""]},
      { Id: "2", Name: "Fix Defect 322134", List: "Dunno", Project: "Acturis", Completed: false, CompletedByDate: new Date(), Tags:[""]},
    ]
  },
  {
    Id: "Build Drone",
    Tasks: [
      { Id: "1", Name: "Research", List: "Dunno", Project: "Acturis", Completed: true, CompletedByDate: new Date(), Tags:[""]},
      { Id: "2", Name: "Buy Parts", List: "Dunno", Project: "Acturis", Completed: false, CompletedByDate: new Date(), Tags:[""]},
      { Id: "2", Name: "Assembly", List: "Dunno", Project: "Acturis", Completed: false, CompletedByDate: new Date(), Tags:[""]},
      { Id: "2", Name: "Crash and Burn", List: "Dunno", Project: "Acturis", Completed: false, CompletedByDate: new Date(), Tags:[""]},
    ]
  }
];