import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LogbookComponent } from './modules/logbook/logbook.page';
import { TasksComponent } from './modules/tasks/tasks.page';
import { CalenderComponent } from './modules/calender/calender.page';
import { ProjectsComponent } from './modules/projects/projects.page';
import { WaitingComponent } from './modules/waiting/waiting.page';
import { OverviewComponent } from './modules/overview/overview.page';



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
