import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogbookComponent } from './modules/logbook/pages/logbook.page';
import { TasksComponent } from './modules/tasks/pages/tasks.page';
import { CalenderComponent } from './modules/calender/pages/calender.page';
import { ProjectsComponent } from './modules/projects/pages/projects.page';
import { WaitingComponent } from './modules/waiting/pages/waiting.page';
import { OverviewComponent } from './modules/overview/pages/overview.page';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: OverviewComponent },
  { path: 'in', component: LogbookComponent },
  { path: 'next-actions', component: TasksComponent },
  { path: 'calender', component: CalenderComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'waiting-for', component: WaitingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
