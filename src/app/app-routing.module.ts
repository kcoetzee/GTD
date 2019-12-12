import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './modules/tasks/pages/tasks.page';
import { ProjectsComponent } from './modules/projects/pages/projects.page';
import { WaitingComponent } from './modules/waiting/pages/waiting.page';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () =>import('./modules/overview/overview.module').then(m => m.OverviewModule) },
  { path: 'in', loadChildren: () => import('./modules/logbook/logbook.module').then(m => m.LogbookModule) },
  { path: 'next-actions', component: TasksComponent },
  { path: 'calender', loadChildren: () => import('./modules/calender/calender.module').then(m => m.CalenderModule) },
  { path: 'projects', loadChildren: () => import('./modules/projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'waiting-for', component: WaitingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
