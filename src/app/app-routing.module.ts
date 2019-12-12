import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () =>import('./modules/overview/overview.module').then(m => m.OverviewModule) },
  { path: 'in', loadChildren: () => import('./modules/logbook/logbook.module').then(m => m.LogbookModule) },
  { path: 'next-actions', loadChildren: () => import('./modules/tasks/task.module').then(m => m.TaskModule) },
  { path: 'calender', loadChildren: () => import('./modules/calender/calender.module').then(m => m.CalenderModule) },
  { path: 'projects', loadChildren: () => import('./modules/projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'waiting-for',  loadChildren: () => import('./modules/waiting/waiting.module').then(m => m.WaitingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
